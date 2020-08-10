import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BranchesSchema } from '../../../data/schemas/branches.schema'
import { BranchesService } from './branches.service'
import { BranchesController } from './branches.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'branches',
        useFactory: () => BranchesSchema
      }
    ]),

    MessagesQueueModule
  ],
  controllers: [BranchesController],
  providers: [BranchesService]
})
export class BranchesModule {}
