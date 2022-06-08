import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoInterface } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  traerProductos (){
    return this.http.get<productoInterface[]>('http://localhost:4201/productos');
  }
}
