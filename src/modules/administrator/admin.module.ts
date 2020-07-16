import { Module } from '@nestjs/common'
import { RoomsModule } from './rooms/rooms.module'
import { DoctorsModule } from './doctors/doctors.module'

@Module({
  imports: [DoctorsModule, RoomsModule]
})
export class AdminModule {}
