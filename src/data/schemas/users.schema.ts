import { IUser } from '../interfaces/user.interface'
import { Schema } from 'mongoose'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const UsersSchema = new Schema<IUser>({
  /**
   * @since 1.0.0
   */
  image: {
    type: String,
    default: null
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
  email: {
    type: String,
    required: false
  },

  /**
   * @since 1.0.0
   */
  contact: {
    type: String,
    required: false
  },

  /**
   * @since 1.0.0
   */
  scope: {
    type: [Number],
    default: []
  },

  /**
   * @since 1.0.0
   */
  username: {
    type: String,
    required: true
  },

  /**
   * @since 1.0.0
   */
  password: {
    type: String,
    required: true
  }
})
