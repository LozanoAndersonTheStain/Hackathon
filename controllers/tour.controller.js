const { request, response } = require('express')
const { DateTime } = require('luxon')

const createTour = async (req = request, res = response) => {
    try {
        res.json({
            ok: 'True'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error en el servidor'
        })
    }
}

module.exports = {
    createTour,
}