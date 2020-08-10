import { Schema } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const TransactionsSchema = new Schema(
  {
    /**
     * The Patient who made this transaction
     *
     * @since 1.0.0
     */
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'patients',
      required: true
    },

    /**
     * @since 1.0.0
     */
    paidCash: {
      type: Number,
      default: 0
    },

    /**
     * @since 1.0.0
     */
    returnedCash: {
      type: Number,
      default: 0
    },

    /**
     * @since 1.0.0
     */
    currentAmount: {
      type: Number,
      default: 0
    },

    /**
     * @since 1.0.0
     */
    remainingAmount: {
      type: Number,
      default: 0
    },

    /**
     * @since 1.0.0
     */
    detail: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
