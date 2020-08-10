import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../common/lib/simple.service'
import { IMessagesQueueItem } from './messages-queue-item.interface'
import { Constants } from '../../constants'

export class MessagesQueueService extends SimpleService<IMessagesQueueItem> {
  constructor(
    @InjectModel('messages-queue')
    protected readonly model: Model<IMessagesQueueItem>
  ) {
    super(model)
  }

  async create(document: IMessagesQueueItem): Promise<IMessagesQueueItem> {
    if (Constants.socketStatus > 0) {
      return super.create(document)
    } else Constants.socket.emit('message', document.message)

    return null
  }
}
