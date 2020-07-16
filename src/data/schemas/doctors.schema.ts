import { Schema } from 'mongoose'

export const DoctorsSchema = new Schema({
  image: {
    type: String,
    default: null
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: false
  },

  contact: {
    type: String,
    required: false
  },

  scope: {
    type: [Number],
    default: []
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: 'working'
  },

  specializations: {
    type: [String],
    required: true
  },

  room: {
    type: Schema.Types.ObjectId,
    ref: 'rooms',
    required: true
  },

  joiningDate: {
    type: Date
  }
})
