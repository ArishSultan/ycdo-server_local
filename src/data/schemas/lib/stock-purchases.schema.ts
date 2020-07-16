/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const StockPurchasesSchema = {
  /**
   * @since 1.0.0
   */
  qty: {
    type: Number,
    required: true
  },

  /**
   * @since 1.0.0
   */
  price: {
    type: Number,
    required: true
  },

  /**
   * @since 1.0.0
   */
  batch: {
    type: String,
    required: true
  },

  /**
   * @since 1.0.0
   */
  expiresAt: {
    type: Date,
    default: null,
    required: false
  },

  /**
   * @since 1.0.0
   */
  purchasedAt: {
    type: Date,
    default: Date.now
  }
}
