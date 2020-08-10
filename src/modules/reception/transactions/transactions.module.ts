import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TransactionsSchema } from '../../../data/schemas/transactions.schema'
import { TransactionsService } from './transactions.service'
import { TransactionsController } from './transactions.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'transactions',
        useFactory: () => TransactionsSchema
      }
    ]),

    MessagesQueueModule
  ],
  exports: [TransactionsService],
  providers: [TransactionsService],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
