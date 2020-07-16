import { Document } from 'mongoose'
import { IPatient } from './patient.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface ITransaction extends Document {
  /**
   * The Patient who made this transaction
   *
   * @since 1.0.0
   */
  patient: IPatient | string

  /**
   * @since 1.0.0
   */
  paidCash: number

  /**
   * @since 1.0.0
   */
  returnedCash: number

  /**
   * @since 1.0.0
   */
  currentAmount: number

  /**
   * @since 1.0.0
   */
  remainingAmount: number

  /**
   * @since 1.0.0
   */
  detail: string

  /**
   * @since 1.0.0
   */
  createdAt: Date
}
