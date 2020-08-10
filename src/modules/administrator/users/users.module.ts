import { Schema } from 'mongoose'
import { Module } from '@nestjs/common'
import { UsersSchema } from '../../../data/schemas/users.schema'
import { UsersService } from './users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersController } from './users.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'users',
        useFactory: (): Schema => UsersSchema
      }
    ]),

    MessagesQueueModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
