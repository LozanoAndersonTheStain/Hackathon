const { Router } = require('express')
const { check } = require('express-validator')
const { createTour, createBookingTour } = require('../controllers')
const { validateFields, validateJWT, isRole } = require('../middlewares')

const router = Router()

router.post(
  '/',
  [
    validateJWT,
    isRole('ADMIN_ROLE', 'GUIE_ROLE'),
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('description', 'La description es requerida').not().isEmpty(),
    check('route', 'La ruta es requerida').not().isEmpty(),
    check('maximumAmountPeople', 'La cantidad maxima es requeridad')
      .not()
      .isEmpty(),
    check('minimumAmountPeople', 'La cantidad minima es requerida')
      .not()
      .isEmpty(),
    check('meetingPlace', 'El lugar de encuentro es requerido').not().isEmpty(),
    check('guie', 'El guia es requerido').not().isEmpty(),
    check('paymentNetwork', 'El metodo de pago es requerido').not().isEmpty(),
    validateFields,
  ],
  createTour
)

router.post(
  '/booking',
  [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('guie', 'El guia es requerido').not().isEmpty(),
    check('date', 'La fecha es requerida').not().isEmpty(),
    check('route', 'La ruta es requerida').not().isEmpty(),
    check('amountPeople', 'La cantidad de personas es requerida')
      .not()
      .isEmpty(),
    check('meetingPlace', 'El lugar de encuentro es requerido').not().isEmpty(),
    check('paymentNetwork', 'El metodo de pago es requerido').not().isEmpty(),
    validateFields,
  ],
  createBookingTour
)

module.exports = router
