import { Schema } from 'mongoose'

export const UpdatesSchema = new Schema({
  /**
   * @values reception, pharmacy, server, laboratory, clinic
   */
  module: {
    type: String,
    required: true
  },

  assets: {
    type: [
      {
        url: String,
        name: String,
        type: String,
        label: String
      }
    ],
    default: []
  },

  version: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: null
  },

  prerelease: {
    type: Boolean,
    default: false
  },

  publishedAt: {
    type: Date,
    required: true
  }
})
