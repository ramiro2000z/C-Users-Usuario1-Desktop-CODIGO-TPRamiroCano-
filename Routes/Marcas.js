const express = require('express')
const routes = express.Router()

const MarcasController = require('../Controllers/MarcasController')

routes.get('/', MarcasController.index)
routes.get('/:idMarca', MarcasController.vehiculosDeMarca)
routes.get('/*', MarcasController.error)

module.exports = routes