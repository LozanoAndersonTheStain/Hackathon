const { required, response } = require('express')
const { DateTime } = require('luxon')
const { Booking } = require('../models')

const createBookingTour = async (req = required, res = response) => {
  try {
    let { name, createdAt, ...body } = req.body
    name = req.body.name.toLowerCase().trim()

    data = {
      ...body,
      name: name,
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

const findAllBooking = async (req = request, res = response) => {
  try {
    let { from = 0, lot = 10 } = req.body
    from = from <= 0 || isNaN(from) ? 0 : from - 1
    lot = lot <= 0 || isNaN(lot) ? 10 : lot

    const query = { status: true }

    const [bookings, total] = await Promise.all([
      Booking.find(query).skip(from).limit(lot),
      Booking.countDocuments(query),
    ])

    const quantity = bookings.length
    const pagination = {
      from: Number(from + 1),
      lot: Number(lot),
    }

    res.json({
      total,
      quantity,
      pagination,
      bookings,
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
  findAllBooking,
}
