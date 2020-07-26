const express = require('express');
const app = express()
const fs = require('fs')

app.listen(3030, () => console.log('Server running in localhost:3030 port'));

const RutasSucursales = require('./Routes/Sucursales')
const RutasAutos = require('./Routes/Autos')
const RutasMarcas = require('./Routes/Marcas')
const RutasHome = require('./Routes/Home')

app.use('/Sucursales', RutasSucursales)
app.use('/Autos', RutasAutos)
app.use('/Marcas', RutasMarcas)
app.use('/', RutasHome)