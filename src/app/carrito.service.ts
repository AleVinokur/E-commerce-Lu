import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: Producto[] = [];

  constructor() { }

  agregarProducto(producto: Producto) {
    const index = this.productos.findIndex((p) => p.nombre === producto.nombre);

    if (index !== -1) {
      this.productos[index].cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }
  }

  obtenerProductos() {
    return this.productos;
  }

  limpiarCarrito() {
    this.productos = [];
  }

  actualizarCantidadProducto(producto: Producto) {
    // Encuentra el índice del producto en el array de productos del carrito
    const index = this.productos.findIndex((p) => p.nombre === producto.nombre);

    if (index !== -1) {
      // Actualiza la cantidad del producto en el carrito
      this.productos[index].cantidad = producto.cantidad;
    }
  }

  eliminarProducto(producto: Producto) {
    // Encuentra el índice del producto en el array de productos del carrito
    const index = this.productos.findIndex((p) => p.nombre === producto.nombre);

    if (index !== -1) {
      // Elimina el producto del carrito usando el índice
      this.productos.splice(index, 1);
    }
  }

  actualizarCarrito(carrito: Producto[]) {
    this.productos = carrito;
  }

}
