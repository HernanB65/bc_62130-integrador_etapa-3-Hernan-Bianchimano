import mongoose from 'mongoose'

// ! CREAMOS EL ESQUEMA 

const productosSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

// ! CREAMOS MODELO
const ProductosModel = mongoose.model('productos', productosSchema)

/* ----------------------------------------------------------------- */
/* Métodos que nos va a servir de interfaz para interactuar con la DB */
/* ----------------------------------------------------------------- */
// Obtener el producto basado en el id
const leerProducto = (id) => {

}
// Obtener todos los productos de la base
const leerProductos = async () => {
    try {
        const productos = await ProductosModel.find({})
        return productos
    } catch (error) {
        console.log('[leerProductos]: Algo no salió bien...', error)
    }
}
// Guardar en la base de datos el producto recibido
const guardarProducto = (productoNuevo) => {

}
// Va a actualizar el producto basado en el id y el producto a editar
const modificarProducto = (id, productoAEditar) => {

}
// Va a eliminar el producto basado en el id
const eliminarProducto = (id) => {

} 

export default {
    leerProducto,
    leerProductos,
    guardarProducto,
    modificarProducto,
    eliminarProducto
}
