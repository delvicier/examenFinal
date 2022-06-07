import { Request, Response } from 'express';
import { productos } from '../entidades/Productos'

// Crear productos
export const creadorProductos = async (req: Request, res: Response) => {

    try {
    // Creamos un objeto para extraer los datos
    // y mandarlos a la base de datos
    const producto = new productos()
    // Con req.body traemos datos:
    const {nombre, precio, foto, descripcion } = req.body
    producto.nombre = nombre;
    producto.precio = precio;
    producto.foto = foto;
    producto.descripcion = descripcion;

    // para guardar en la BD, esto es asincrono
    // asique arriba en creadorProductos agregamos
    await producto.save();
    return res.json(producto);

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

// Obtener productos
export const obtenerProductos = async (req:Request, res:Response) => {
    
    try {

        // buscamos en la BD con "find"
        const allProductos = await productos.find();
            return res.json(allProductos);

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

// Actualizar productos
export const actualizarProductos = async (req:Request, res:Response) => {
    
    try {
    
        // buscamos el producto mediante el id con "findOneBy" y convertimos a string 
        const buscar = await productos.findOneBy({id: parseInt(req.params.id)});
        
        if(!buscar) return res.status(404).json({message:'No existe el producto'})
        // realizamos la actualizacion
        const {id} = req.params 
        await productos.update({id:parseInt(id)}, req.body)
        return res.sendStatus(204)

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

// Eliminar productos
export const eliminarProductos = async (req:Request, res:Response) => {
    
    try {
        const {id} = req.params

        const resultado = await productos.delete({id: parseInt(id)})
        if(resultado.affected === 0) {
            return res.status(404).json({message: 'Producto no encontrado'})
        }
        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

// crear productos
export const obtenerProducto = async (req:Request, res:Response) => {
    
    try {
        const {id} = req.params;
        const onlyProducto = await productos.findOneBy({ id: parseInt(id) });
        return res.json(onlyProducto);

    }catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}