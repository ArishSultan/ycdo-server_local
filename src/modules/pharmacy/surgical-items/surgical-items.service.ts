import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ISurgicalItem } from '../../../data/interfaces/surgical-item.interface'
import { SimpleService } from '../../../common/lib/simple.service'
import { StockPurchaseService } from '../stock-purchase.service'
import { ISurgicalItemsStock } from '../../../data/interfaces/surgical-items-stock.interface'
import { IMedicinesStock } from '../../../data/interfaces/medicines-stock.interface'
import { IMedicine } from '../../../data/interfaces/medicine.interface'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class SurgicalItemsService extends StockPurchaseService<
  ISurgicalItem,
  ISurgicalItemsStock
> {
  public constructor(
    @InjectModel('surgical-items')
    protected model: Model<ISurgicalItem>,

    @InjectModel('surgical-items-stock')
    protected purchaseModel: Model<ISurgicalItemsStock>,

    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, purchaseModel, messagesQueueService)
  }

  async purchase(
    id: string,
    t: ISurgicalItemsStock
  ): Promise<ISurgicalItem | null> {
    t.surgicalItem = t.item as ISurgicalItem
    await this.purchaseModel.create(t)
    return super.purchase(id, t)
  }

  purchases(id: string) {
    return this.purchaseModel.find({ surgicalItem: id }).exec()
  }
}
