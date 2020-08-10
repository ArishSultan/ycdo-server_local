import { Module } from '@nestjs/common'
import { TokensService } from './tokens.service'
import { TokensController } from './tokens.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TokensSchema } from '../../../data/schemas/tokens.schmea'
import { TransactionsModule } from '../transactions/transactions.module'
import { TokenPrintsSchema } from '../../../data/schemas/token-prints.schema'
import { MedicinesModule } from '../../pharmacy/medicines/medicines.module'
import { DiagnosticsModule } from '../../laboratory/diagnostics/diagnostics.module'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'
import { Schema } from 'mongoose';
import { UsersModule } from '../../administrator/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'tokens',
        useFactory: (): Schema => TokensSchema
      },
      {
        name: 'token-prints',
        useFactory: (): Schema => TokenPrintsSchema
      }
    ]),

    UsersModule,
    MedicinesModule,
    DiagnosticsModule,
    TransactionsModule,
    MessagesQueueModule
  ],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
