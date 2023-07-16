import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.agruparProductos(this.carritoService.obtenerProductos());
  }

  agruparProductos(productos: Producto[]): Producto[] {
    const productosAgrupados: { [nombre: string]: Producto } = {};

    productos.forEach((producto) => {
      const nombre = producto.nombre;
      if (productosAgrupados[nombre]) {
        productosAgrupados[nombre].cantidad += producto.cantidad;
      } else {
        productosAgrupados[nombre] = { ...producto };
      }
    });

    return Object.values(productosAgrupados);
  }

  eliminarProducto(producto: Producto) {
    this.carrito = this.carrito.filter((p) => p.nombre !== producto.nombre);
    this.carritoService.actualizarCarrito(this.carrito);
  }

  eliminarTodo() {
    this.carritoService.limpiarCarrito();
    this.carrito = [];
  }

  incrementarCantidad(producto: Producto) {
    producto.cantidad += 1;
  }

  decrementarCantidad(producto: Producto) {
    if (producto.cantidad > 1) {
      producto.cantidad -= 1;
    }
  }

  calcularPrecioTotal(producto: Producto): number {
    return producto.precio * producto.cantidad;
  }

  realizarPago() {
    // Lógica para realizar el pago con Mercado Pago
    // Implementar la integración con Mercado Pago aquí

    // Por ejemplo, podrías redirigir a una página de pago de Mercado Pago
    window.location.href = 'https://www.mercadopago.com/pay';
  }

}
