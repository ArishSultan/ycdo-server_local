import { Schema } from 'mongoose'

/**
 * Mongoose Schema of `patients` collection
 * ----------------------------------------
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const PatientSchema = new Schema(
  {
    /**
     * Name of Patient.
     *
     * @since 1.0.0
     */
    name: {
      type: String,
      required: true
    },

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
    cnic: {
      type: String,
      unique: true,
      required: true
    },

    /**
     * Contact Number of Patient.
     *
     * It can be a Land line number or the Mobile phone
     * number
     *
     * @since 1.0.0
     */
    contact: {
      type: String,
      required: false
    },

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
    dob: {
      type: Date,
      required: true
    },

    /**
     * Address of Patient.
     *
     * @since 1.0.0
     */
    address: {
      type: String,
      required: false
    },

    /**
     * User that created this patient
     *
     * @since 1.0.0
     */
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  { timestamps: true }
)
