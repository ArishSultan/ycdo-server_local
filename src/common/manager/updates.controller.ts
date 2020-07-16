import { IUpdate } from './schema/update.interface'
import { Document } from 'mongoose'
import { UpdatesService } from './updates.service'
import { SimpleController } from '../lib/simple.controller'
import { Controller, Get, HttpException, Param } from '@nestjs/common'

@Controller('updates')
export class UpdatesController extends SimpleController<IUpdate> {
  constructor(protected readonly service: UpdatesService) {
    super(service)
  }

  @Get(':module')
  checkForUpdates(@Param('module') module: string) {
    // this.service.checkForUpdate(module)
  }

  @Get(':version')
  isUpdateAvailable(@Param('version') version: string) {}

  patch(data: IUpdate): Promise<IUpdate> {
    throw new HttpException('', 405)
  }
  delete(id: string): Promise<Document> {
    throw new HttpException('', 405)
  }
}
