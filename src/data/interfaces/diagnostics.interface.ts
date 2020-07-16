import { Document } from 'mongoose'
/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IDiagnostic extends Document {
  /**
   * Name of Diagnostic (Lab Test)
   *
   * @since 1.0.0
   */
  name: string

  /**
   * These are the equipments that are used to
   * perform test.
   *
   * @since 1.0.0
   */
  equipments: {
    _id: string
    consumption: number
  }[]

  /**
   * @since 1.0.0
   */
  poor: number

  /**
   * @since 1.0.0
   */
  general: number

  /**
   * @since 1.0.0
   */
  private: number

  /**
   * It is the minimum Time that is required to
   * perform this test
   *
   * It must be stored in (HH:MM:SS) format
   *
   * @example
   * const time1 = '(00:30:00)' // it means 30 minutes.
   * const time2 = '(01:00:00)' // it means 01 hour.
   *
   * @since 1.0.0
   */
  timeRequired: string
}
