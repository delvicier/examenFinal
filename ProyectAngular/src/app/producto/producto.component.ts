import { Component, OnInit, Input } from '@angular/core';
import { productoInterface } from '../model/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  // Recibiremos del componente Padre el Array

  @Input() productos: productoInterface = {
    id: 0,
    nombre: "",
    precio: 0,
    foto: "",
    descripcion: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
