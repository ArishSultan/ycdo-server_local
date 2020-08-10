import { Document } from 'mongoose'

/**
 * It contains the common Schema fields of `surgical-items`,
 * `diagnostic-equipments` and `medicines` collection
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IProduct extends Document {
  /**
   * Name of the StockItem.
   *
   * @since 1.0.0
   */
  name: string

  /**
   * SI Unit of the StockItem.
   *
   * @values mg, ml, piece
   * @since 1.0.0
   */
  unit: string

  /**
   * Price for people of Poor category
   * @since 1.0.0
   */
  poor: number

  /**
   * Price for people of YCDO category
   * @since 1.0.0
   */
  ycdo: number

  /**
   * Price for people of General category
   * @since 1.0.0
   */
  general: number

  /**
   * Price for people of Deserving category
   * @since 1.0.0
   */
  deserving: number

  /**
   * It is the minimum quantity of the product that
   * must be available in the stock.
   *
   * whenever the quantity reaches below this limit
   * than the system will start generating warning
   * to refill the stock.
   *
   * @since 1.0.0
   */
  fixLimit: number

  /**
   * It is the minimum quantity of the product that
   * must be available in the stock.
   *
   * whenever the quantity reaches below this limit
   * than the system will start generating warning
   * to refill the stock.
   *
   * @since 1.0.0
   */
  marketPrice: number

  /**
   * It is the retail price of the stock item
   *
   * The final price at which the product is
   * sold to the customers / consumers.
   *
   * @since 1.0.0
   */
  retailPrice: number

  quantity: number
}
