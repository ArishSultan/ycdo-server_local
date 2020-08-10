import { Model } from 'mongoose'
import { IPatient } from '../../../data/interfaces/patient.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../../common/lib/simple.service'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class PatientsService extends SimpleService<IPatient> {
  public constructor(
    @InjectModel('patients')
    protected readonly model: Model<IPatient>,

    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, messagesQueueService)
  }
}
