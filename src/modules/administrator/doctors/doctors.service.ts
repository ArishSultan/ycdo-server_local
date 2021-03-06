import { Model } from 'mongoose'
import { IDoctor } from '../../../data/interfaces/doctor.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { UsersService } from '../users/users.service'
import { SimpleService } from '../../../common/lib/simple.service'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class DoctorsService extends SimpleService<IDoctor> {
  constructor(
    @InjectModel('doctors')
    protected readonly model: Model<IDoctor>,
    protected readonly service: UsersService,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, messagesQueueService)
  }

  async create(data: any): Promise<IDoctor> {
    data.scope = [4]
    await this.service.create(data)
    return super.create(data)
  }

  private static generateUsername(name: string): string {
    if (!name) throw 'Name is not Valid!'
    return `${name.split(' ')[0].toLowerCase()}.doctor@ycdo.com`
  }
}
