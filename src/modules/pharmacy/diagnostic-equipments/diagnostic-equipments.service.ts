import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IDiagnosticEquipment } from '../../../data/interfaces/diagnostic-equipment.interface'
import { StockPurchaseService } from '../stock-purchase.service'
import { IDiagnosticItemsStock } from '../../../data/interfaces/diagnostic-items-stock.interface'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class DiagnosticEquipmentsService extends StockPurchaseService<
  IDiagnosticEquipment,
  IDiagnosticItemsStock
> {
  constructor(
    @InjectModel('diagnostic-equipments')
    protected model: Model<IDiagnosticEquipment>,

    @InjectModel('diagnostic-items-stock')
    protected purchaseModel: Model<IDiagnosticItemsStock>,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, purchaseModel, messagesQueueService)
  }

  async purchase(
    id: string,
    t: IDiagnosticItemsStock
  ): Promise<IDiagnosticEquipment | null> {
    t.diagnosticItem = t.item as IDiagnosticEquipment
    await this.purchaseModel.create(t)
    return super.purchase(id, t)
  }

  purchases(id: string) {
    return this.purchaseModel.find({ diagnosticItem: id }).exec()
  }
}
