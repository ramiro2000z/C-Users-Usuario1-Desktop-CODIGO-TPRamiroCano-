const fs = require('fs')
const leer = require('../lectorJSON')
let SucursalesController = {
    index: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let locales = []
        let direcciones = []
        let telefonos = []
        leer.forEach(sucursal =>{
         locales.push("Local: " + sucursal.sucursal + "\nDireccion: " + sucursal.direccion + "\nTelefono: " + sucursal.telefono + "\n\n")
        })
         res.write("Bienvenido a nuestra pagina, nuestras sucursales disponibles son: \n---------------------------------\n" + direcciones + "\n\n" + locales + "\n\n" + telefonos + "\n\n")
         res.end()
     },
    store: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let sucursales = []
        leer.forEach(tienda => {
                    if(req.params.idSucursal == tienda.sucursal) {
                    sucursales.push(tienda.sucursal, tienda.direccion, tienda.telefono, tienda.autos)
                    let sucursal = sucursales[0]
                    let direccion = sucursales[1]
                    let telefono = sucursales[2]
                    let vehiculo = sucursales[3] 
                    res.write("Local: " + sucursal)
                    res.write("\nDireccion: " + direccion)
                    res.write("\nTelefono: " + telefono + "\n\nCantidad De Vehiculos En La Sucursal: " + sucursales[3].length + "\n\nVehiculos: \n\n")
                    vehiculo.forEach(dato =>{
                              res.write("Marca: " + dato.marca + " \nModelo: " + dato.modelo + " \nAño: " + dato.anio + "\nColor: " + dato.color + "\n\n")
                    })  
                    res.end()
                }
            })
            res.write("no se encuentra la sucursal")
            res.end()
    }
}
module.exports = SucursalesController



