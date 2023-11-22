import { check } from "express-validator"
import productoMiddleware from "../middlewares/productos.middleware.js"


const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío info incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    productoMiddleware  
]

const productoUpdateValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envio info incorrecta para actualizar el producto'),
    productoMiddleware
]

const productoReadOneValidator = [
    check('id')
        .optional()
        .isMongoId()
        .withMessage('El identificador es de formato incorrecto'), 
    productoMiddleware
]

export default {
    productoDeleteValidator,
    productoCreateValidator, 
    productoUpdateValidator,
    productoReadOneValidator
}