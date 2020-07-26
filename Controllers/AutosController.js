const leer = require('../lectorJSON')
module.exports = AutosController = {
    index:(req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write("Todos Los Vehiculos De Nuestras Sucursales: \n\n")
        let TotalAutos = []
        leer.forEach(concesionaria => {
            res.write(concesionaria.sucursal + "\n\n")
            concesionaria.autos.forEach(carro => {
                TotalAutos.push(concesionaria.autos)
                res.write("Marca: " + carro.marca + "\n")
                res.write("Modelo: " + carro.modelo + "\n")
                res.write("Año: " + carro.anio + "\n")
                res.write("Color: " + carro.color + "\n\n")
            })
        })
        res.write("Vehiculos en Total: " + TotalAutos.length)
        res.end()
    },
    marcas: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let idMarca = req.params.idMarca
        leer.forEach(marcaGeneral => {
            marcaGeneral.autos.forEach(marcaExacta => {
                let totalDeAutos = []
                if(idMarca.toLowerCase() == marcaExacta.marca.toLowerCase()) {
                    totalDeAutos.push(marcaExacta.marca, marcaExacta.modelo, marcaExacta.anio, marcaExacta.color)
                    res.write("Marca: " + totalDeAutos[0] + "\n")
                    res.write("Modelo: " + totalDeAutos[1] + "\n")
                    res.write("Año: " + totalDeAutos[2] + "\n")
                    res.write("Color: " + totalDeAutos[3] + "\n\n")
                }
            })
        })
        res.end()
    },
    datoOpcional: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let marca = req.params.idMarca
        let datos = req.params.dato
        let datoOpcional = []
        leer.forEach(datosGeneral => {
            datosGeneral.autos.forEach(datoEspecifico => {
                if(datoEspecifico.marca == marca && datoEspecifico.color == datos || datoEspecifico.anio == datos) {
                    datoOpcional.push(datoEspecifico.marca, datoEspecifico.modelo, datoEspecifico.anio, datoEspecifico.color)
                    res.write("Marca: " + datoOpcional[0] + "\n")
                    res.write("Modelo: " + datoOpcional[1] + "\n")
                    res.write("Año: " + datoOpcional[2] + "\n")
                    res.write("Color: " + datoOpcional[3] + "\n\n")
                }
            })
        })
        res.end()
    }
}
