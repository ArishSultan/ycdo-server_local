import { Schema } from 'mongoose';

export const MedicineSalesSchema = new Schema({
  medicine: {
    type: Schema.Types.ObjectId,
    ref: 'medicines',
    required: true
  },

  month: {
    type: Number,
    required: true
  },

  totalQuantity: {
    type: Number,
    required: true
  },

  details: [{
    createdAt: Date,
    quantity: Number
  }]
})
