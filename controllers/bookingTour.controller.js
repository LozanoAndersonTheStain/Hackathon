const { required, response } = require('express')
const { DateTime } = require('luxon')
const { Booking } = require('../models')

const createBookingTour = async (req = required, res = response) => {
  try {
    let { name, createdAt, date, ...body } = req.body
    name = req.body.name.toLowerCase().trim()

    data = {
      ...body,
      name: name,
      date: date,
      createdAt: DateTime.now(),
    }

    const tourBooking = new Booking(data)
    tourBooking.save()

    res.json({
      tourBooking,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Error en el servidor',
    })
  }
}

module.exports = {
  createBookingTour,
}
