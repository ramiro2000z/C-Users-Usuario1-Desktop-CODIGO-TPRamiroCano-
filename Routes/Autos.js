const express = require('express')
const routes = express.Router()

const AutosController = require('../Controllers/AutosController')


routes.get('/:idMarca', AutosController.marcas)
routes.get('/:idMarca/:dato', AutosController.datoOpcional)
routes.get('/', AutosController.index)

module.exports = routes