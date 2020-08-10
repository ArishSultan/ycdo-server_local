import { Module } from '@nestjs/common'
import { MedicinesModule } from './medicines/medicines.module'
import { SurgicalItemsModule } from './surgical-items/surgical-items.module'
import { DiagnosticEquipmentsModule } from './diagnostic-equipments/diagnostic-equipments.module'

@Module({
  imports: [MedicinesModule, SurgicalItemsModule, DiagnosticEquipmentsModule]
})
export class PharmacyModule {}
