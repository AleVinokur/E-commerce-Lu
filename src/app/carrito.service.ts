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
      // Si el producto ya existe en el carrito, simplemente aumenta su cantidad
      this.productos[index].cantidad += producto.cantidad;
    } else {
      // Si el producto no existe en el carrito, agrégalo directamente
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
    // Busca el producto en el carrito por su nombre
    const productoEnCarrito = this.productos.find((p) => p.nombre === producto.nombre);

    if (productoEnCarrito) {
      // Si el producto está en el carrito, actualiza su cantidad
      productoEnCarrito.cantidad = producto.cantidad;
    }
  }

  eliminarProducto(producto: Producto) {
    // Filtra el producto para eliminarlo del carrito
    this.productos = this.productos.filter((p) => p.nombre !== producto.nombre);
  }

  actualizarCarrito(carrito: Producto[]) {
    this.productos = carrito;
  }

  calcularPrecioTotal(): number {
    // Calcula el precio total sumando el precio de cada producto por su cantidad
    return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }


}
