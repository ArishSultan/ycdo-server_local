import { Schema } from 'mongoose'
import { Module } from '@nestjs/common'
import { RoomsService } from './rooms.service'
import { MongooseModule } from '@nestjs/mongoose'
import { RoomsController } from './rooms.controller'
import { RoomsSchema } from '../../../data/schemas/rooms.schema'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'rooms',
        useFactory: (): Schema => RoomsSchema
      }
    ])
  ],
  providers: [RoomsService],
  controllers: [RoomsController]
})
export class RoomsModule {}
