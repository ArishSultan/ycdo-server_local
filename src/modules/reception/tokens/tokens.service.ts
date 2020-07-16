import * as moment from 'moment'
import required from '../../../data/required'

import { DocumentQuery, Model } from 'mongoose'
import { IToken } from '../../../data/interfaces/token.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ITokenPrint } from '../../../data/interfaces/token-print.interface'
import { ITransaction } from '../../../data/interfaces/transaction.interface'
import { SimpleService } from '../../../common/lib/simple.service'
import { MedicinesService } from '../../pharmacy/medicines/medicines.service'
import { DiagnosticsService } from '../../laboratory/diagnostics/diagnostics.service'
import { TransactionsService } from '../transactions/transactions.service'
import { IMedicine } from '../../../data/interfaces/medicine.interface'

@Injectable()
export class TokensService extends SimpleService<IToken> {
  constructor(
    @InjectModel('tokens')
    protected model: Model<IToken>,
    @InjectModel('token-prints')
    protected printModel: Model<ITokenPrint>,

    private readonly medicinesService: MedicinesService,
    private readonly diagnosticsService: DiagnosticsService,
    private readonly transactionsService: TransactionsService
  ) {
    super(model)
  }

  public async isPrinted(id: string): Promise<boolean> {
    return (await this.printModel.find().where('token', id).exec()).length > 0
  }

  public print(id: string, iid: string): Promise<ITokenPrint> {
    return this.printModel.create<any>({ token: id, printedBy: iid })
  }

  private _tokensForCheckup(state?: string) {
    return this.model
      .find()
      .where('state', state)
      .populate('medicines.medicine')
      .populate('diagnostics.diagnostic')
      .exec()
    // const _tokens = []
    //
    // let tokensQuery: DocumentQuery<
    //   IToken[],
    //   IToken,
    //   unknown
    // > = this.model.find()
    // if (state) tokensQuery = tokensQuery.where('state', state)
    //
    // const tokens: IToken[] = await tokensQuery.exec()
    //
    // for (let i = 0; i < tokens.length; ++i) {
    //   const _medicines = []
    //   const _diagnostics = []
    //
    //   for (const medicine of tokens[i].medicines) {
    //     await _medicines.push({
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-ignore
    //       ...(await this.medicinesService.find(medicine._id))._doc,
    //       consumption: medicine.consumption
    //     })
    //   }
    //
    //   for (const diagnostic of tokens[i].diagnostics) {
    //     await _diagnostics.push({
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-ignore
    //       ...(await this.diagnosticsService.find(diagnostic._id))._doc,
    //       result: diagnostic.result
    //     })
    //   }
    //
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   const { medicines, diagnostics, ...data } = tokens[i]
    //
    //   _tokens.push({
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     ...data._doc,
    //     medicines: _medicines,
    //     diagnostics: _diagnostics
    //   })
    // }
  }

  public async getTokensForSale() {
    return this._tokensForCheckup('for-sale')
  }

  public async getRunningToken() {
    return this._tokensForCheckup('running')
  }

  public async getPendingToken() {
    return this._tokensForCheckup('pending')
  }

  public async getTestingToken() {
    return this.model.find().where('state', 'testing').exec()
  }

  public async create(document: IToken): Promise<IToken> {
    document.number = await this._generateNumber()
    document.branch = required.branch

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
        createdAt: new Date(Date.now())
      } as ITransaction)
    ]
    return super.create(document)
  }

  fetch(id?: string): Promise<IToken | IToken[]> {
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

  private async _generateNumber() {
    const lastToken = await this.model.findOne().sort({ createdAt: -1 }).exec()

    if (!lastToken) return '00001'

    const days = moment(Date.now()).diff(moment(lastToken.createdAt), 'days')

    let number = 1
    if (days < 1) number += parseInt(lastToken.number)

    return Intl.NumberFormat('number', {
      minimumIntegerDigits: 5
    })
      .format(number)
      .replace(',', '')
  }
}
