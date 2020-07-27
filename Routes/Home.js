const express = require('express')
const routes = express.Router()

const HomeController = require('../Controllers/HomeController')

routes.get('/', HomeController.index)
routes.get('/*', HomeController.error)

module.exports = routes