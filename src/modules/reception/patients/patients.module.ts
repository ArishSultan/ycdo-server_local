import { Module } from '@nestjs/common'
import { PatientSchema } from '../../../data/schemas/patient.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { PatientsService } from './patients.service'
import { PatientsController } from './patients.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'patients',
        useFactory: () => PatientSchema
      }
    ]),

    MessagesQueueModule
  ],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
