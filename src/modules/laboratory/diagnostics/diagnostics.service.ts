import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { SimpleService } from '../../../common/lib/simple.service'
import { IDiagnostic } from '../../../data/interfaces/diagnostics.interface'
import { MessagesQueueService } from '../../message-queue/messages-queue.service'

@Injectable()
export class DiagnosticsService extends SimpleService<IDiagnostic> {
  public constructor(
    @InjectModel('diagnostics')
    protected model: Model<IDiagnostic>,
    protected readonly messagesQueueService: MessagesQueueService
  ) {
    super(model, messagesQueueService)
  }

  fetch(id?: string): Promise<IDiagnostic[] | IDiagnostic> {
    if (id)
      return this.model.findById(id).populate('equipments.equipment').exec()
    return this.model.find().exec()
  }
}
