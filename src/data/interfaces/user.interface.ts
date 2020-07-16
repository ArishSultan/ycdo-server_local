import { Document } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IUser extends Document {
  /**
   * @since 1.0.0
   */
  image?: string

  /**
   * @since 1.0.0
   */
  name: string

  /**
   * @since 1.0.0
   */
  email: string

  /**
   * @since 1.0.0
   */
  scope: number[]

  /**
   * @since 1.0.0
   */
  contact: string

  /**
   * @since 1.0.0
   */
  username: string

  /**
   * @since 1.0.0
   */
  password: string
}
