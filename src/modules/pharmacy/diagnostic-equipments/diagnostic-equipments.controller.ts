import { Controller } from '@nestjs/common'
import { DiagnosticEquipmentsService } from './diagnostic-equipments.service'
import { SimpleController } from '../../../common/lib/simple.controller'
import { IDiagnosticEquipment } from '../../../data/interfaces/diagnostic-equipment.interface'
import { StockPurchaseController } from '../stock-purchase.controller'
import { IDiagnosticItemsStock } from '../../../data/interfaces/diagnostic-items-stock.interface'

@Controller('diagnostic-equipments')
export class DiagnosticEquipmentsController extends StockPurchaseController<
  IDiagnosticEquipment,
  IDiagnosticItemsStock
> {
  public constructor(protected service: DiagnosticEquipmentsService) {
    super(service)
  }
}
