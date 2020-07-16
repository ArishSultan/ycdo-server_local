import { IUser } from './user.interface'
import { IPatient } from './patient.interface'
import { IMedicine } from './medicine.interface'
import { IDiagnostic } from './diagnostics.interface'
import { ITransaction } from './transaction.interface'
import { IBranch } from './branches.interface'

/**
 * @extends ITransaction
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IToken extends ITransaction {
  /**
   * @since 1.0.0
   */
  number: string

  /**
   * @values poor, general, ycdo
   * @since 1.0.0
   */
  type: string

  /**
   * @since 1.0.0
   */
  patient: IPatient | string

  /**
   * @since 1.0.0
   */
  symptoms: string

  /**
   * @since 1.0.0
   */
  diseases: string

  /**
   * @since 1.0.0
   */
  medicines: {
    medicine: IMedicine | string
    consumption: string
  }[]

  /**
   * @since 1.0.0
   */
  diagnostics: {
    diagnostic: IDiagnostic | string
    result: string
  }[]

  /**
   * @values running, pending, done
   */
  state: string

  /**
   * @since 1.0.0
   */
  checkedBy: IUser | string

  transaction: ITransaction[] | string[]

  branch: IBranch | string
  createdAt: Date
  createdBy: IUser | string
}
