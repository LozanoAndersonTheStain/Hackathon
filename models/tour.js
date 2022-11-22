const { DateTime } = require('luxon')
const { Schema, model } = require('mongoose')

const TourSchema = {
  name: {
    type: String,
    require: [true, 'El nombre es requerido'],
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  date: {
    type: Date,
    require: [true, 'La fecha es reuerida'],
  },
  route: {
      type: [String],
      require: [true, 'La  ruta a seguir es requerida'],
    },
    meetingPlace: {
      type: [String],
      require: [true, 'El lugar de encuentro es requerido'],
    },
  paymentNetwork: {
    type: [String],
    require: [true, 'El metodo de pago es requerido'],
  },
}

module.exports = model('Tour', TourSchema)
