import { IMedicine } from './medicine.interface'
import { IStockPurchase } from './lib/stock-purchase.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IMedicinesStock extends IStockPurchase {
  /**
   * @since 1.0.0
   */
  medicine: IMedicine | string
}
