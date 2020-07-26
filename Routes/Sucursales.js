const express = require('express')
const routes = express.Router()

const SucursalesController = require('../Controllers/SucursalesController')

routes.get('/', SucursalesController.index)
routes.get('/:idSucursal', SucursalesController.store)

module.exports = routes