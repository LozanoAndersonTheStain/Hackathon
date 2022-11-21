const { DateTime } = require('luxon')
const { Schema, model } = require('mongoose')

const TourSchema = {
  name: {
    type: String,
    require: [true, 'El nombre es requerido'],
  },
  date: {
    type: Date,
    require: [true, 'La fecha es reuerida'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  meetingPlace: {
    type: [String],
    require: [true, 'El lugar de encuentro es requerido'],
  },
}

module.exports = model('Tour', TourSchema)
