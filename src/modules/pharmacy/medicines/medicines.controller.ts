import { IMedicine } from '../../../data/interfaces/medicine.interface'
import { Controller } from '@nestjs/common'
import { IMedicinesStock } from '../../../data/interfaces/medicines-stock.interface'
import { MedicinesService } from './medicines.service'
import { StockPurchaseController } from '../stock-purchase.controller'

@Controller('medicines')
export class MedicinesController extends StockPurchaseController<
  IMedicine,
  IMedicinesStock
> {
  public constructor(protected service: MedicinesService) {
    super(service)
  }
}
