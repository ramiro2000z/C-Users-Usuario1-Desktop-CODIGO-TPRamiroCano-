const fs = require('fs')
const leer = require('../lectorJSON')
const MarcasController = {
    index: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write("Las Marcas Con Las Que Trabajamos Son: \n\n")
        let vehiculo = []
        leer.forEach(auto => {
            let autos = auto.autos
            autos.forEach(marcas => {
                vehiculo.push(marcas.marca)
            }) 
        }) 
        let autosOrganizados = Array.from(new Set(vehiculo))
        autosOrganizados.forEach(marcaEspecial => {
            res.write(marcaEspecial + '\n')
        }) 
        res.write("\nCantidad de Marcas en Total: " + autosOrganizados.length)
        res.end()
    },
    vehiculosDeMarca: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let idMarca = req.params.idMarca
        let cantidadVehiculos = []
        leer.forEach(auto => { 
            auto.autos.forEach(marcas => {
                let datos = []
                if(idMarca.toLowerCase() == marcas.marca.toLowerCase()) {
                    cantidadVehiculos.push(marcas.marca)
                    datos.push(marcas.marca, marcas.modelo, marcas.anio, marcas.color)
                    res.write("Marca: " + datos[0] + "\n")
                    res.write("Modelo: " + datos[1] + "\n")
                    res.write("Año: " + datos[2] + "\n")
                    res.write("Color: " + datos[3] + "\n\n")
                }
            })
        })
        let cantidadAutos = cantidadVehiculos.length;
        res.write("Cantidad de Vehiculos Que Coinciden Con esa Marca: " + cantidadAutos.toString())
        res.end()
    },
    error: (req, res) => {
        res.send("Error 404 Not Found")
    }
}
module.exports = MarcasController