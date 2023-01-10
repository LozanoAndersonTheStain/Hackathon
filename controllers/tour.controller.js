const { request, response } = require('express')
const { DateTime } = require('luxon')
const { Tour } = require('../models')

const createTour = async (req = request, res = response) => {
  try {
    let { name, ...body } = req.body
    name = name.toLowerCase().trim()

    const tourBD = await Tour.findOne({ name })
    if (tourBD) {
      return res.status(400).json({
        msg: `Ya existe un artículo con el titulo ${title}`,
      })
    }
    
    data = {
      ...body,
      name: '',
      description: '',
      user: req.authenticatedUser.id,
      data: Date.now(),
      route: [],
      meetingPlace: [],
      paymentNetwork: [],
    }

    res.json({
      ok: 'True',
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
}
