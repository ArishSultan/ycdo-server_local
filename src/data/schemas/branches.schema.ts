import { Schema } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const BranchesSchema = new Schema(
  {
    /**
     * @since 1.0.0
     */
    code: {
      type: String,
      required: true
    },

    /**
     * @since 1.0.0
     */
    name: {
      type: String,
      required: true
    },

    /**
     * @since 1.0.0
     */
    address: {
      type: String,
      required: true
    },

    /**
     * @since 1.0.0
     */
    contact: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
