const { Router } = require('express')
const { check } = require('express-validator')

const router = Router()

router.post("/", createTour)

module.exports = router