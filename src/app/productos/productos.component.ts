
import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  catalogoProductos: Producto[] = [
    {
      imagen: '../../img/s-l225.jpg',
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 10.99,
      cantidad: 0
    },
    {
      imagen: '../../img/011-700x700.jpg',
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 19.99,
      cantidad: 0
    },
    {
      imagen: '../../img/Brill-Top-Gel.jpg',
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 19.99,
      cantidad: 0
    },
    // Agrega más productos según tus necesidades
  ];

  constructor(private carritoService: CarritoService) { }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);
  }
}
