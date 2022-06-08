import {Router} from 'express'
import{ creadorProductos, obtenerProductos, actualizarProductos, eliminarProductos, obtenerProducto } from '../controllers/productos.controllers'

const rutas = Router()
// Crear
rutas.post('/productos', creadorProductos);

// Obtener
rutas.get('/productos', obtenerProductos);

// Actualizar
rutas.put('/productos/:id', actualizarProductos);

// Eliminar
rutas.delete('/productos/:id', eliminarProductos);

// Crear solo un producto
rutas.get('/productos/:id', obtenerProducto);

export default rutas;