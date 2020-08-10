import { Document } from 'mongoose'
import { IMedicine } from '../medicine.interface'
import { ISurgicalItem } from '../surgical-item.interface'
import { IDiagnosticEquipment } from '../diagnostic-equipment.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IStockPurchase extends Document {
  item: IMedicine | ISurgicalItem | IDiagnosticEquipment

  /**
   * @since 1.0.0
   */
  qty: number

  /**
   * @since 1.0.0
   */
  price: string

  /**
   * @since 1.0.0
   */
  batch: string

  /**
   * @since 1.0.0
   */
  expiresAt: Date

  /**
   * @since 1.0.0
   */
  purchasedAt: Date
}
