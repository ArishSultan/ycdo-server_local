import { Schema } from 'mongoose'
import { IBranch } from '../interfaces/branches.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const RoomsSchema = new Schema<IBranch>({
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
  type: {
    type: String,
    required: true
  },

  /**
   * @since 1.0.0
   */
  branch: {
    type: Schema.Types.ObjectId,
    ref: 'branches',
    required: true
  }
})
