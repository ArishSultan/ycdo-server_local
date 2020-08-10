import * as moment from 'moment'
import { Model } from 'mongoose'
import { IToken } from '../../../data/interfaces/token.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ITokenPrint } from '../../../data/interfaces/token-print.interface'
import { ITransaction } from '../../../data/interfaces/transaction.interface'
import { SimpleService } from '../../../common/lib/simple.service'
import { TransactionsService } from '../transactions/transactions.service'
import { UsersService } from '../../administrator/users/users.service';
import { Readable } from 'stream';
import { printReport } from '../../../common/utils';
import { Constants } from '../../../constants';
import { IUser } from '../../../data/interfaces/user.interface';
import { MessagesQueueService } from '../../message-queue/messages-queue.service';

@Injectable()
export class TokensService extends SimpleService<IToken> {
  constructor(
    @InjectModel('tokens')
    protected model: Model<IToken>,
    @InjectModel('token-prints')
    protected printModel: Model<ITokenPrint>,

    private readonly usersService: UsersService,
    private readonly transactionsService: TransactionsService,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, messagesQueueService)
  }

  public async print(token: string, user: string): Promise<Readable> {
    let pdfFile

    const _lastPrint = await this.printModel
      .findOne()
      .where('token', token)
      .sort({ printedAt: -1 })
      .exec()

    if (_lastPrint) {
      pdfFile = await printReport('checkup-token-duplicate.odt', _lastPrint.data)
    } else {
      const _token = (await this.model.findById(token)
        .populate('branch')
        .populate('patient')
        .populate('checkedBy')
        .populate('createdBy')
        .populate('transaction')
        .exec()) as any

      const transaction = _token.transaction[_token.transaction.length -1]

      const data = {
        bname: _token.branch.name,
        bcontact: _token.branch.contact,
        number: _token.number,
        createdAt: moment(_token.createdAt).format('ddd, MMM Do YYYY'),
        pname: _token.patient.name,
        pcnic: _token.patient.cnic,
        ptype: _token.type,
        page: moment().diff(new Date(_token.patient.dob), 'years'),
        pcontact: _token.patient.contact,
        paddress: _token.patient.address,
        checkedBy: _token.checkedBy.name,
        tokenBy: _token.createdBy.name,
        year: new Date().getFullYear(),
        total: (transaction.currentAmount || 0) + (transaction.remainingAmount || 0),
        cashReceived: transaction.paidCash || 0,
        cashReturned: transaction.returnedCash || 0,
        printedAt: moment().format('ddd, MMM Do YYYY'),
        printedBy: ((await this.usersService.find(user)) as IUser).name
      }

      pdfFile = await printReport('checkup-token.odt', data)
      await this.printModel.create<any>({ token: token, printedBy: user, data })
    }

    return pdfFile
  }

  public fetchTokensInRange(start: Date, end: Date): Promise<IToken[]> {
    return this.model.find({
      createdAt: { $gte: start, $lte: end }
    }).populate('patient').exec()
  }

  public fetchByTokenState(state: string): Promise<IToken[]> {
    return this.model
      .find()
      .where('state', state)
      .populate('medicines.medicine')
      .populate('diagnostics.diagnostic')
      .exec()
  }

  public fetch(id?: string): Promise<IToken | IToken[]> {
    if (id)
      return this.model
        .findById(id)
        .populate('patient')
        .populate('transaction')
        .populate('checkedBy')
        .populate('createdBy')
        .exec()
    return super.fetch()
  }
  public async create(document: IToken): Promise<IToken> {
    document.number = await this._generateNumber()
    console.log('generated', document.number)
    document.branch = Constants.branch._id

    document.transaction = [
      await this.transactionsService.create({
        patient: document.patient,
        paidCash: document.paidCash || 0,
        returnedCash: document.returnedCash || 0,
        currentAmount: document.currentAmount || 0,
        remainingAmount: (() => {
          try {
            return (
              parseInt((document.remainingAmount || 0).toString()) +
              parseInt((document.currentAmount || 0).toString()) -
              parseInt((document.paidCash || 0).toString()) +
              parseInt((document.returnedCash || 0).toString())
            )
          } catch (e) {
            return 0
          }
        })(),
        detail: 'TOKEN GENERATION [First Turn]',
      } as ITransaction)
    ]
    return super.create(document)
  }

  private async _generateNumber() {
    const lastToken = await this.model.findOne().sort({ createdAt: -1 }).exec()

    if (!lastToken) return '00001'

    const days = moment(Date.now()).diff(moment(lastToken.createdAt), 'days', true)


    let number = 1
    if (days < 1) {
      console.log('number', lastToken.number)
      console.log('parsed', parseInt(lastToken.number))
      number += parseInt(lastToken.number)
    }

    return Intl.NumberFormat('number', {
      minimumIntegerDigits: 5
    })
      .format(number)
      .replace(',', '')
  }
}
