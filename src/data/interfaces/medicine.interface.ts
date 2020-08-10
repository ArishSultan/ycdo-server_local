import { IProduct } from './lib/product.interface'

/**
 * @extends IProduct
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmial.com>
 */
export interface IMedicine extends IProduct {
  /**
   * Stands for 'One Dose'
   * these medicines that consumed once per day.
   *
   * @since 1.0.0
   */
  isOd: boolean

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
  isPaid: boolean

  /**
   * It is the category of medicine
   *
   * Some common categories are Tablets, Bandages, Ointments,
   * Syrups etc...
   *
   * @since 1.0.0
   */
  category: string
}
