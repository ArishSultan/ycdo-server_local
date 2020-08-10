import { Body, Controller, Post } from '@nestjs/common';
import { ISurgicalItem } from '../../../data/interfaces/surgical-item.interface'
import { StockPurchaseController } from '../stock-purchase.controller'
import { ISurgicalItemsStock } from '../../../data/interfaces/surgical-items-stock.interface'
import { SurgicalItemsService } from './surgical-items.service'
import { StockSaleService } from '../stock-sale.service';

@Controller('surgical-items')
export class SurgicalItemsController extends StockPurchaseController<
  ISurgicalItem,
  ISurgicalItemsStock
> {
  public constructor(
    protected service: SurgicalItemsService,
    // private readonly stockService: StockSaleService
  ) {
    super(service)
  }

  // @Post('sale')
  // sale(@Body() body) {
  //   // this.stockService
  // }
}
