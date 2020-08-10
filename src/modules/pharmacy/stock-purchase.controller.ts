import { Document } from 'mongoose'
import { SimpleController } from '../../common/lib/simple.controller'
import { Body, Get, Param, Post } from '@nestjs/common'
import { StockPurchaseService } from './stock-purchase.service'
import { IStockPurchase } from '../../data/interfaces/lib/stock-purchase.interface'
import { IProduct } from '../../data/interfaces/lib/product.interface'

export class StockPurchaseController<
  T extends IProduct,
  K extends IStockPurchase
> extends SimpleController<T> {
  constructor(protected service: StockPurchaseService<T, K>) {
    super(service)
  }

  @Get(':id/purchases')
  purchases(@Param('id') id: string) {
    return this.service.purchases(id)
  }

  @Post(':id/purchases')
  purchase(@Param('id') id: string, @Body() data: K) {
    return this.service.purchase(id, data)
  }
}
