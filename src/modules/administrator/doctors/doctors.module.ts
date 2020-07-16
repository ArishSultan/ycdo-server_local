import { Module } from '@nestjs/common'
import { UsersModule } from '../users/users.module'
import { DoctorsSchema } from '../../../data/schemas/doctors.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { DoctorsService } from './doctors.service'
import { DoctorsController } from './doctors.controller'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'doctors',
        useFactory: () => DoctorsSchema
      }
    ]),

    UsersModule
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}
