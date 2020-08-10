import { Schema } from 'mongoose'
import { StockPurchasesSchema } from './lib/stock-purchases.schema'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const SurgicalItemsStockSchema = new Schema({
  /**
   * @since 1.0.0
   */
  surgicalItem: {
    type: Schema.Types.ObjectId,
    required: true
  },

  ...StockPurchasesSchema
})
