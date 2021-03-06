import { Model } from 'mongoose'
import { IMedicine } from '../../../data/interfaces/medicine.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { StockPurchaseService } from '../stock-purchase.service'
import { IMedicinesStock } from '../../../data/interfaces/medicines-stock.interface'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class MedicinesService extends StockPurchaseService<
  IMedicine,
  IMedicinesStock
> {
  public constructor(
    @InjectModel('medicines')
    protected model: Model<IMedicine>,

    @InjectModel('medicine-stock')
    protected purchaseModel: Model<IMedicinesStock>,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, purchaseModel, messagesQueueService)
  }

  async purchase(id: string, t: IMedicinesStock): Promise<IMedicine | null> {
    t.medicine = t.item as IMedicine
    await this.purchaseModel.create(t)
    return super.purchase(id, t)
  }

  purchases(id: string): Promise<IMedicinesStock[]> {
    return this.purchaseModel.find({ medicine: id }).exec()
  }
}
