import { Document } from 'mongoose'
import { IToken } from './token.interface'
import { IUser } from './user.interface'

export interface ITokenPrint extends Document {
  data: any
  token: IToken | string
  printedBy: IUser | string
  printedAt: Date
}
