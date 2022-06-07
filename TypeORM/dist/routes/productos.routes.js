"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = require("../controllers/productos.controllers");
const rutas = (0, express_1.Router)();
// Crear
rutas.post('/productos', productos_controllers_1.creadorProductos);
// Obtener
rutas.get('/productos', productos_controllers_1.obtenerProductos);
// Actualizar
rutas.put('/productos/:id', productos_controllers_1.actualizarProductos);
// Eliminar
rutas.delete('/productos/:id', productos_controllers_1.eliminarProductos);
// Crear solo un producto
rutas.get('/productos/:id', productos_controllers_1.obtenerProducto);
exports.default = rutas;
