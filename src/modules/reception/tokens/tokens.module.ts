import { Module } from '@nestjs/common'
import { TokensService } from './tokens.service'
import { TokensController } from './tokens.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TokensSchema } from '../../../data/schemas/tokens.schmea'
import { TransactionsModule } from '../transactions/transactions.module'
import { TokenPrintsSchema } from '../../../data/schemas/token-prints.schema'
import { MedicinesModule } from '../../pharmacy/medicines/medicines.module'
import { DiagnosticsModule } from '../../laboratory/diagnostics/diagnostics.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'tokens',
        useFactory: () => TokensSchema
      },
      {
        name: 'token-prints',
        useFactory: () => TokenPrintsSchema
      }
    ]),

    MedicinesModule,
    DiagnosticsModule,
    TransactionsModule
  ],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
