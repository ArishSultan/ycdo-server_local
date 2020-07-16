import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseConfigService } from './mongoose-config.service'
import { Schema } from 'mongoose'
import { MedicinesSchema } from '../../data/schemas/medicines.schema'
import { MedicinesStockSchema } from '../../data/schemas/medicines-stock.schema'
import { SurgicalItemsSchema } from '../../data/schemas/surgical-items.schema'
import { SurgicalItemsStockSchema } from '../../data/schemas/surgical-items-stock.schema'
import { DiagnosticEquipmentsSchema } from '../../data/schemas/diagnostic-equipments.schema'
import { DiagnosticItemsStock } from '../../data/schemas/diagnostic-items-stock.schema'
import { BranchesSchema } from '../../data/schemas/branches.schema'
import { DoctorsSchema } from '../../data/schemas/doctors.schema'
import { PatientSchema } from '../../data/schemas/patient.schema'
import { TransactionsSchema } from '../../data/schemas/transactions.schema'
import { DbService } from './db.service'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),
    MongooseModule.forFeatureAsync([
      {
        name: 'medicines',
        useFactory: (): Schema => MedicinesSchema
      },
      {
        name: 'medicine-stock',
        useFactory: (): Schema => MedicinesStockSchema
      },
      {
        name: 'surgical-items',
        useFactory: (): Schema => SurgicalItemsSchema
      },
      {
        name: 'surgical-items-stock',
        useFactory: (): Schema => SurgicalItemsStockSchema
      },
      {
        name: 'diagnostic-equipments',
        useFactory: (): Schema => DiagnosticEquipmentsSchema
      },
      {
        name: 'diagnostic-equipments-stock',
        useFactory: (): Schema => DiagnosticItemsStock
      },
      {
        name: 'branches',
        useFactory: (): Schema => BranchesSchema
      },
      {
        name: 'doctors',
        useFactory: (): Schema => DoctorsSchema
      },
      {
        name: 'patients',
        useFactory: (): Schema => PatientSchema
      },
      {
        name: 'transactions',
        useFactory: (): Schema => TransactionsSchema
      }
    ])
  ],
  providers: [DbService]
})
export class DbModule {}
