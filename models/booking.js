const { DateTime } = require('luxon')
const { Schema, model } = require('mongoose')

const BookingSchema = {
    name: {
      type: String,
      require: [true, 'El nombre es requerido'],
    },
    guie: {
      type: [String],
      required: [true, "El guia es requerido"]
    },
    date: {
      type: Date,
      require: [true, 'La fecha es reuerida'],
    },
    route: {
        type: [String],
        require: [true, 'La  ruta a seguir es requerida'],
      },
      amountPeople: {
        type: Number,
        required: [true, 'La cantidad de personas es requerida']
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
      required: true
    }
  }
  
  module.exports = model('Booking', BookingSchema)
  