import { Document } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IBranch extends Document {
  /**
   * @since 1.0.0
   */
  code: string

  /**
   * @since 1.0.0
   */
  name: string

  /**
   * @since 1.0.0
   */
  address: string

  /**
   * @since 1.0.0
   */
  contact: string
}
