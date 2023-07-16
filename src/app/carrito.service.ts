import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: Producto[] = [];

  constructor() { }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  limpiarCarrito() {
    this.productos = [];
  }
}
