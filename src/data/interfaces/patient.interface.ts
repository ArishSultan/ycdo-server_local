import { Document } from 'mongoose'

/**
 * @extends Document
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IPatient extends Document {
  /**
   * Name of Patient.
   *
   * @since 1.0.0
   */
  name: string

  /**
   * CNIC Number of Patient.
   *
   * [Computerized National Identity Card] Number
   *
   * It is basically a unique number that is assigned
   * to each resident of Pakistan. It can be found on
   * the Card that is provided to all residents.
   *
   * @since 1.0.0
   */
  cnic: string

  /**
   * Contact Number of Patient.
   *
   * It can be a Land line number or the Mobile phone
   * number
   *
   * @since 1.0.0
   */
  contact: string

  /**
   * Date of Birth of Patient.
   *
   * It is basically used to calculate the age of
   * the patient dynamically, and then the doctor
   * can prescribe medicines, diagnostic tests and
   * surgeries based on the age of Patient.
   *
   * @since 1.0.0
   */
  dob: Date

  /**
   * Address of Patient.
   *
   * @since 1.0.0
   */
  address: string

  /**
   * User that created this patient
   *
   * @since 1.0.0
   */
  createdBy: string

  fmd: string
}
