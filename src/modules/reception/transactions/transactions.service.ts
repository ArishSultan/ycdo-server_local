import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ITransaction } from '../../../data/interfaces/transaction.interface'
import { SimpleService } from '../../../common/lib/simple.service'

@Injectable()
export class TransactionsService extends SimpleService<ITransaction> {
  constructor(
    @InjectModel('transactions')
    protected readonly model: Model<ITransaction>
  ) {
    super(model)
  }

  async remainingAmount(id: string): Promise<number> {
    const lastTransaction = await this.model
      .findOne()
      .sort({ createdAt: -1 })
      .where('patient', id)
      .exec()

    return lastTransaction?.remainingAmount
  }
}
