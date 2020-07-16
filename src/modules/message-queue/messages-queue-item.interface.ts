import { Document } from 'mongoose'
import { IMessage } from './message.interface'

export interface IMessagesQueueItem extends Document {
  message: IMessage
  createdAt: Date
}
