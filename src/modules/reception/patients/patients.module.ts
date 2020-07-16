import { Module } from '@nestjs/common'
import { PatientSchema } from '../../../data/schemas/patient.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { PatientsService } from './patients.service'
import { PatientsController } from './patients.controller'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'patients',
        useFactory: () => PatientSchema
      }
    ])
  ],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
