import { Component, OnInit } from '@angular/core';
import { productoInterface } from '../model/producto.model';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private servicioProduc: ProductosService
  ){}

  product: productoInterface [] = []

  ngOnInit(): void {
    this.servicioProduc.traerProductos()
    .subscribe(data=>{
      this.product = data;
    })
  }

}

