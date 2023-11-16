import express from 'express'
import carritoController from '../controllers/carrito.controller.js'
const routerCarrito = express.Router()

routerCarrito.post('/', carritoController.guardarCarrito)

export default routerCarrito