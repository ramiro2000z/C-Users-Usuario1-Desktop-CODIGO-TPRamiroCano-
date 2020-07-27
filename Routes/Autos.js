const express = require('express')
const routes = express.Router()

const AutosController = require('../Controllers/AutosController')

routes.get('/', AutosController.index)
routes.get('/:idMarca', AutosController.marcas)
routes.get('/:idMarca/:dato', AutosController.datoOpcional)

module.exports = routes