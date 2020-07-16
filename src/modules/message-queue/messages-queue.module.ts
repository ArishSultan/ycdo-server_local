import { Module } from '@nestjs/common'
import { MessagesQueueService } from './messages-queue.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Schema } from 'mongoose'
import { MessagesQueueItemSchema } from './messages-queue-item.schema'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'messages-queue',
        useFactory: (): Schema => MessagesQueueItemSchema
      }
    ])
  ],
  exports: [MessagesQueueService],
  providers: [MessagesQueueService]
})
export class MessagesQueueModule {}
