import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import routerProductos from './routers/productos.router.js'
import mongoose from 'mongoose'

// ! Configuraciones
const app = express()
const PORT = process.env.PORT || 3000
const corsConfig = {     
    origin: 'http://localhost:2222' // http://127.0.0.1:2222
}

// ! CONEXION MONGODB

const conectar = async () => {
    try {
        await mongoose.connect(process.env.URI_MLOCAL)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a MongoDB', error)
    }
}
conectar()

// ! Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsConfig))

// ! Rutas
app.use('/api/productos', routerProductos)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('*', (req, res) => {
    res.status(404).send(`La ruta ${req.url} utilizando el ${req.method} no está disponible`)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})