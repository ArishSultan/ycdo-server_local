import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../common/lib/simple.service'
import { IMessagesQueueItem } from './messages-queue-item.interface'

export class MessagesQueueService extends SimpleService<IMessagesQueueItem> {
  constructor(
    @InjectModel('messages-queue')
    protected readonly model: Model<IMessagesQueueItem>
  ) {
    super(model)
  }
}
