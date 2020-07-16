import { ISurgicalItem } from './surgical-item.interface'
import { IStockPurchase } from './lib/stock-purchase.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface ISurgicalItemsStock extends IStockPurchase {
  /**
   * @since 1.0.0
   */
  surgicalItem: ISurgicalItem | string
}
