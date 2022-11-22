const authController = require('./auth.controller')
const categoryController = require('./category.controller')
const productController = require('./product.controller')
const searchController = require('./search.controller')
const uploadController = require('./upload.controller')
const userController = require('./user.controller')
const tourController = require('./tour.controller')
const bookingTourController = require('./bookingTour.controller')

module.exports = {
  ...authController,
  ...categoryController,
  ...productController,
  ...searchController,
  ...uploadController,
  ...userController,
  ...tourController,
  ...bookingTourController,
}
