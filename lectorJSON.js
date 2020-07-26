let fs = require('fs')
let archivo = JSON.parse(fs.readFileSync('./Data/concesionarias.json','utf-8'))

module.exports = archivo

