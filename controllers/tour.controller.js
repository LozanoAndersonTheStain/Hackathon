const { request, response } = require('express')
const { DateTime } = require('luxon')
const { Tour } = require('../models')

const createTour = async (req = request, res = response) => {
  try {
    let { name, description, ...body } = req.body

    name = name.toLowerCase().trim()
    const tourBD = await Tour.findOne({ name })

    if (tourBD) {
      return res.status(400).json({
        msg: `Ya existe un tour un el nombre ${name}`,
      })
    }

    data = {
      ...body,
      name: name,
      description: description,
      user: req.authenticatedUser.id,
      createdAt: DateTime.now(),
    }

    const tour = new Tour(data)
    tour.save()

    res.json({
      tour,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Error en el servidor',
    })
  }
}

const findAllTours = async (req = request, res = response) => {
  try {
    let { from = 0, lot = 10 } = req.body
    from = from <= 0 || isNaN(from) ? 0 : from - 1
    lot = lot <= 0 || isNaN(lot) ? 10 : lot

    const query = { status: true }

    const [tours, total] = await Promise.all([
      Tour.find(query).skip(from).limit(lot),
      Tour.countDocuments(query),
    ])

    const quantity = tours.length
    const pagination = {
      from: Number(from + 1),
      lot: Number(lot),
    }

    res.json({
      total,
      quantity,
      pagination,
      tours,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Error en el servidor',
    })
  }
}

module.exports = {
  createTour,
  findAllTours,
}
