import { Schema } from 'mongoose'
import { ITokenPrint } from '../interfaces/token-print.interface'

export const TokenPrintsSchema = new Schema<ITokenPrint>({
  token: {
    type: Schema.Types.ObjectId,
    ref: 'tokens',
    required: true
  },

  data: {
    type: Object,
    required: true
  },

  printedBy: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },

  printedAt: {
    type: Date,
    default: Date.now()
  }
})
