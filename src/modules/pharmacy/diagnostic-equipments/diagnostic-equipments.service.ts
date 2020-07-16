import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../../common/lib/simple.service'
import { IDiagnosticEquipment } from '../../../data/interfaces/diagnostic-equipment.interface'
import { StockPurchaseService } from '../stock-purchase.service'
import { IDiagnosticItemsStock } from '../../../data/interfaces/diagnostic-items-stock.interface'
import { ISurgicalItemsStock } from '../../../data/interfaces/surgical-items-stock.interface'
import { ISurgicalItem } from '../../../data/interfaces/surgical-item.interface'

@Injectable()
export class DiagnosticEquipmentsService extends StockPurchaseService<
  IDiagnosticEquipment,
  IDiagnosticItemsStock
> {
  constructor(
    @InjectModel('diagnostic-equipments')
    protected model: Model<IDiagnosticEquipment>,

    @InjectModel('diagnostic-items-stock')
    protected purchaseModel: Model<IDiagnosticItemsStock>
  ) {
    super(model, purchaseModel)
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
