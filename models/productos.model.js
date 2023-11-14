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
const leerProducto = async (id) => {
    try {
        const producto = await ProductosModel.findById(id)
        return producto
    } catch (error) {
        console.log('[leerProducto]: No se pudo leer el producto con el id', error)
        
    }


}
//------------------------------------------------------------------
// Obtener todos los productos de la base
const leerProductos = async () => {
    try {
        const productos = await ProductosModel.find({})
        return productos
    } catch (error) {
        console.log('[leerProductos]: Algo no salió bien...', error)
    }
}
//------------------------------------------------------------------
// Guardar en la base de datos el producto recibido
const guardarProducto = async (productoNuevo) => {
    
    try {
     const productoAlmacenado = new ProductosModel(productoNuevo)
     const producto = await productoAlmacenado.save()
     return productoAlmacenado
    } catch (error) {
     console.log('ERROR (Guardar Productos), no se pudo guardar en la DB', error)    
    }

}
//------------------------------------------------------------------
// Va a actualizar el producto basado en el id y el producto a editar
const modificarProducto = async (id, productoAEditar) => {

    try {
        const productoModificado = await ProductosModel.findByIdAndUpdate(id, productoAEditar)
        return productoModificado
    } catch (error) {
        console.log('ERROR[modificarProducto]: No se pudo actualizar el producto', error);
    }

}
//------------------------------------------------------------------
// Va a eliminar el producto basado en el id
const eliminarProducto = async (id) => {

    try {
        const productoBorrado = await ProductosModel.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        console.log('ERROR al eliminar la película en la DB', error)      
    }

} 

export default {
    leerProducto,
    leerProductos,
    guardarProducto,
    modificarProducto,
    eliminarProducto
}
