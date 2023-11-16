import mongoose from "mongoose"

// ! CREAMOS EL ESQUEMA

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// ! CREAMOS MODELO
const CarritoModel = mongoose.model('carritos', carritoSchema)

/* ------------------------------------------------------------------- */
/* Métodos que nos van a servir de interfaz para interactuar con la DB */
/* ------------------------------------------------------------------- */

// ---------------------------------------------Crear Carrito

const crearCarrito = async (carrito) => {
    
    try {
        const carritoCreado = new CarritoModel({carrito})
        const carritoGuardado = await carritoCreado.save()

        return carrito
    } catch (error) {
        console.log('ERROR[crearCarrito]: Problemas al crear el carrito', error);
    }
}

export default {
    crearCarrito
}