import { Controller } from '@nestjs/common'
import { SimpleController } from '../../common/lib/simple.controller'
import { IMessagesQueueItem } from './messages-queue-item.interface'
import { MessagesQueueService } from './messages-queue.service'

@Controller('messages-queue')
export class MessagesQueueController extends SimpleController<
  IMessagesQueueItem
> {
  constructor(protected readonly service: MessagesQueueService) {
    super(service)
  }
}
