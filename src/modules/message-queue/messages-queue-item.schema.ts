import { Schema } from 'mongoose'
import { MessageSchema } from './message.schema'

export const MessagesQueueItemSchema = new Schema({
  message: {
    type: MessageSchema,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
})
