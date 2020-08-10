import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DiagnosticsSchema } from '../../../data/schemas/diagnostics.schema'
import { DiagnosticsService } from './diagnostics.service'
import { DiagnosticsController } from './diagnostics.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'diagnostics',
        useFactory: () => DiagnosticsSchema
      }
    ]),

    MessagesQueueModule
  ],
  controllers: [DiagnosticsController],
  providers: [DiagnosticsService],
  exports: [DiagnosticsService]
})
export class DiagnosticsModule {}
