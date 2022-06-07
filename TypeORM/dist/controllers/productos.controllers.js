"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerProducto = exports.eliminarProductos = exports.actualizarProductos = exports.obtenerProductos = exports.creadorProductos = void 0;
const Productos_1 = require("../entidades/Productos");
// Crear productos
const creadorProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Creamos un objeto para extraer los datos
        // y mandarlos a la base de datos
        const producto = new Productos_1.productos();
        // Con req.body traemos datos:
        const { nombre, precio, foto, descripcion } = req.body;
        producto.nombre = nombre;
        producto.precio = precio;
        producto.foto = foto;
        producto.descripcion = descripcion;
        // para guardar en la BD, esto es asincrono
        // asique arriba en creadorProductos agregamos
        yield producto.save();
        return res.json(producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.creadorProductos = creadorProductos;
// Obtener productos
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // buscamos en la BD con "find"
        const allProductos = yield Productos_1.productos.find();
        return res.json(allProductos);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerProductos = obtenerProductos;
// Actualizar productos
const actualizarProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // buscamos el producto mediante el id con "findOneBy" y convertimos a string 
        const buscar = yield Productos_1.productos.findOneBy({ id: parseInt(req.params.id) });
        if (!buscar)
            return res.status(404).json({ message: 'No existe el producto' });
        // realizamos la actualizacion
        const { id } = req.params;
        yield Productos_1.productos.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.actualizarProductos = actualizarProductos;
// Eliminar productos
const eliminarProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resultado = yield Productos_1.productos.delete({ id: parseInt(id) });
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.eliminarProductos = eliminarProductos;
// crear productos
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const onlyProducto = yield Productos_1.productos.findOneBy({ id: parseInt(id) });
        return res.json(onlyProducto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerProducto = obtenerProducto;
