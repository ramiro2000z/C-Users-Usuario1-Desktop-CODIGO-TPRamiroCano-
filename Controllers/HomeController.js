const fs = require('fs')
const leer = require('../lectorJSON')
const HomeController = {
    index: (req, res) => {
       let locales = []
       leer.forEach(dato =>{
        locales.push(dato.sucursal)
       })
        locales = locales.join('<br >')
        res.send("Bienvenido a nuestra pagina,nuestras sucursales disponibles son:<br >---------------------------------<br >" + locales + '<br >---------------')
    },
    error: (req, res) => {
        res.send("Error 404 Not Found")
    }

}

module.exports = HomeController