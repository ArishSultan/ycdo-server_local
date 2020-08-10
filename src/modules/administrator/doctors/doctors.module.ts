import { Module } from '@nestjs/common'
import { UsersModule } from '../users/users.module'
import { DoctorsSchema } from '../../../data/schemas/doctors.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { DoctorsService } from './doctors.service'
import { DoctorsController } from './doctors.controller'
import { MessagesQueueModule } from '../../message-queue/messages-queue.module'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'doctors',
        useFactory: () => DoctorsSchema
      }
    ]),

    UsersModule,
    MessagesQueueModule
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}
