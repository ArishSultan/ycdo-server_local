import { Schema } from 'mongoose'
import { ProductSchema } from './lib/product.schema'
import { IDiagnosticEquipment } from '../interfaces/diagnostic-equipment.interface'

/**
 * Mongoose Schema of `diagnostic-equipments` collection
 * -----------------------------------------------------
 *
 * @version 1.0.0
 * @author Arish Khan <arishsultan104@gmail.com>
 */
export const DiagnosticEquipmentsSchema = new Schema<IDiagnosticEquipment>(
  ProductSchema
)
