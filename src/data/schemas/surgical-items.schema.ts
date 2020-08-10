import { Schema } from 'mongoose'
import { ProductSchema } from './lib/product.schema'
import { ISurgicalItem } from '../interfaces/surgical-item.interface'

/**
 * Mongoose Schema of `surgical-items` collection
 * ---------------------------------------------------
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const SurgicalItemsSchema = new Schema<ISurgicalItem>({
  ...ProductSchema,

  /**
   * Determines if the consumer / customer has to pay
   * for the medicine or not
   *
   * if a medicine is parked as [paid] than each
   * patient have to pay for it but if it is not
   * the case than the patient might get the medicine
   * for free. mostly poor category persons get the
   * medicines for free.
   *
   * @since 1.0.0
   */
  isPaid: { type: Boolean, default: false }
})
