import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SurgicalItemsSchema } from '../../../data/schemas/surgical-items.schema'
import { SurgicalItemsService } from './surgical-items.service'
import { SurgicalItemsController } from './surgical-items.controller'
import { SurgicalItemsStockSchema } from '../../../data/schemas/surgical-items-stock.schema'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'surgical-items',
        useFactory: () => SurgicalItemsSchema
      },
      {
        name: 'surgical-items-stock',
        useFactory: () => SurgicalItemsStockSchema
      }
    ]),

    MessagesQueueModule
  ],

  controllers: [SurgicalItemsController],
  providers: [SurgicalItemsService]
})
export class SurgicalItemsModule {}
