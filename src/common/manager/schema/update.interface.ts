import { Document } from 'mongoose'

export interface IUpdate extends Document {
  assets: {
    url: String
    name: String
    type: String
    label: String
  }[]

  version: string
  prerelease: boolean
  description: string
  publishedAt: Date
}
