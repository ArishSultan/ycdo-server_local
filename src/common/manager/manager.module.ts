import { Module } from '@nestjs/common'
import { UpdatesService } from './updates.service'

@Module({
  providers: [UpdatesService]
})
export class ManagerModule {}
