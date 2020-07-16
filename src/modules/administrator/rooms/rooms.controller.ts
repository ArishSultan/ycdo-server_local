import { RoomsService } from './rooms.service'
import { Controller, Get, Query } from '@nestjs/common'
import { IRoom } from '../../../data/interfaces/room.interface'
import { SimpleController } from '../../../common/lib/simple.controller'

@Controller('rooms')
export class RoomsController extends SimpleController<IRoom> {
  constructor(protected readonly service: RoomsService) {
    super(service)
  }

  @Get()
  rooms(@Query('branch') branch: string): Promise<IRoom | IRoom[]> {
    return this.service.getByBranch(branch)
  }
}
