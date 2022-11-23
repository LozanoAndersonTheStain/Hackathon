const { DateTime } = require('luxon')
const { Schema, model } = require('mongoose')

const TourSchema = Schema({
  name: {
    type: String,
    require: [true, 'El nombre es requerido'],
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida'],
  },
  status: {
    type: String,
    default: true,
  },
  guie: {
    type: [String],
    required: [true, 'El guia es requerido'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  imageUrl: {
    type: String,
  },
  date: {
    type: Date,
    require: [true, 'La fecha es reuerida'],
  },
  maximumAmountPeople: {
    type: Number,
    required: [true, 'La cantidad de personas es reuerida'],
  },
  minimumAmountPeople: {
    type: Number,
    required: [true, 'La cantidad minima es requerida'],
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
  createdAt: {
    type: Date,
    required: true,
  },
})

TourSchema.methods.toJSON = function () {
  const { __v, _id, createdAt, ...tour } = this.toObject()
  tour.id = _id
  tour.createdAt = DateTime.fromISO(createdAt.toISOString())

  return tour
}

module.exports = model('Tour', TourSchema)
