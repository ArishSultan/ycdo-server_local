/**
 * It contains the common Schema fields of `surgical-items`,
 * `diagnostic-equipments` and `medicines` collection
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const ProductSchema = Object.freeze({
  /**
   * Name of the StockItem.
   *
   * @since 1.0.0
   */
  name: {
    type: String,
    required: true
  },

  /**
   * SI Unit of the StockItem.
   *
   * @values mg, ml, piece
   * @since 1.0.0
   */
  unit: {
    type: String,
    required: true
  },

  /**
   * Price for people of Poor category
   * @since 1.0.0
   */
  poor: {
    type: String,
    required: true
  },

  /**
   * Price for people of YCDO category
   * @since 1.0.0
   */
  ycdo: {
    type: String,
    required: true
  },

  /**
   * Price for people of General category
   * @since 1.0.0
   */
  general: {
    type: String,
    required: true
  },

  /**
   * Price for people of Deserving category
   * @since 1.0.0
   */
  deserving: {
    type: String,
    required: true
  },

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
  fixLimit: {
    type: Number,
    required: true
  },

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
  marketPrice: {
    type: Number,
    required: true
  },

  /**
   * It is the retail price of the stock item
   *
   * The final price at which the product is
   * sold to the customers / consumers.
   *
   * @since 1.0.0
   */
  retailPrice: {
    type: Number,
    required: true
  },

  /**
   * It is the quantity of the product in the stock.
   *
   * If it is lower then the `fixLimit` then a warning will be
   * generated on the client side.
   *
   * @since 1.0.0
   */
  quantity: {
    type: Number,
    default: 0
  }
})
