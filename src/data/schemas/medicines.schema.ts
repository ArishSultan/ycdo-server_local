import { Schema } from 'mongoose'
import { IMedicine } from '../interfaces/medicine.interface'
import { ProductSchema } from './lib/product.schema'

/**
 * Mongoose Schema of `medicines` collection
 * -----------------------------------------
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const MedicinesSchema = new Schema<IMedicine>({
  ...ProductSchema,

  /**
   * Stands for 'One Dose'
   * these medicines that consumed once per day.
   *
   * @since 1.0.0
   */
  isOd: { type: Boolean, default: false },

  /**
   * Determines if the consumer / customer has to pay for the
   * medicine or not
   *
   * if a medicine is parked as [paid] than each patient have
   * to pay for it but if it is not the case than the patient
   * might get the medicine for free. mostly poor category
   * persons get the medicines for free.
   *
   * @since 1.0.0
   */
  isPaid: { type: Boolean, default: false },

  /**
   * It is the category of medicine
   *
   * Some common categories are Tablets, Bandages, Ointments,
   * Syrups etc...
   *
   * @since 1.0.0
   */
  category: { type: String, required: true }
})
