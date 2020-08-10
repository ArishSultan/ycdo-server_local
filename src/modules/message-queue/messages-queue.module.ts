import { Module } from '@nestjs/common'
import { MessagesQueueService } from './messages-queue.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Schema } from 'mongoose'
import { MessagesQueueItemSchema } from './messages-queue-item.schema'
import { MessagesQueueController } from './messages-queue.controller'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'messages-queue',
        useFactory: (): Schema => MessagesQueueItemSchema
      }
    ])
  ],
  controllers: [MessagesQueueController],
  providers: [MessagesQueueService],
  exports: [MessagesQueueService]
})
export class MessagesQueueModule {}
