import { DiagnosticItemsStock } from '../../../data/schemas/diagnostic-items-stock.schema'

import { Module } from '@nestjs/common'
import { DiagnosticEquipmentsService } from './diagnostic-equipments.service'
import { DiagnosticEquipmentsController } from './diagnostic-equipments.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { DiagnosticEquipmentsSchema } from '../../../data/schemas/diagnostic-equipments.schema'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'diagnostic-equipments',
        useFactory: () => DiagnosticEquipmentsSchema
      },
      {
        name: 'diagnostic-items-stock',
        useFactory: () => DiagnosticItemsStock
      }
    ]),

    MessagesQueueModule
  ],

  controllers: [DiagnosticEquipmentsController],
  providers: [DiagnosticEquipmentsService]
})
export class DiagnosticEquipmentsModule {}
