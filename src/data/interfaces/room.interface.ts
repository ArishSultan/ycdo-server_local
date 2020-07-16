import { IBranch } from './branches.interface'
import { Document } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IRoom extends Document {
  /**
   * @since 1.0.0
   */
  name: string

  /**
   * @since 1.0.0
   */
  type: string

  /**
   * @since 1.0.0
   */
  branch: IBranch | string
}
