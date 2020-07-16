import { Model } from 'mongoose'
import { IProduct } from '../../data/interfaces/lib/product.interface'
import { SimpleService } from '../../common/lib/simple.service'
import { IStockPurchase } from '../../data/interfaces/lib/stock-purchase.interface'

export abstract class StockPurchaseService<
  T extends IProduct,
  K extends IStockPurchase
> extends SimpleService<T> {
  protected constructor(
    protected service: Model<T>,
    protected purchaseService: Model<K>
  ) {
    super(service)
  }

  abstract purchases(id: string)

  async purchase(id: string, t: K) {
    const data = await this.service.findById(id).exec()
    try {
      data.quantity += parseInt((t.qty || 0).toString())
    } catch {}

    return this.service.findByIdAndUpdate(id, data).exec()
  }
}
