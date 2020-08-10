import { IStockPurchase } from './lib/stock-purchase.interface'
import { IDiagnosticEquipment } from './diagnostic-equipment.interface'

/**
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export interface IDiagnosticItemsStock extends IStockPurchase {
  /**
   * @since 1.0.0
   */
  diagnosticItem: IDiagnosticEquipment | string
}
