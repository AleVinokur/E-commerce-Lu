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
  precioTotal: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.agruparProductos(this.carritoService.obtenerProductos());
    this.precioTotal = this.carritoService.calcularPrecioTotal();
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
    this.precioTotal = this.carritoService.calcularPrecioTotal();
  }

  eliminarTodo() {
    this.carritoService.limpiarCarrito();
    this.carrito = [];
    this.precioTotal = 0;
  }

  incrementarCantidad(producto: Producto) {
    producto.cantidad += 1;
    this.precioTotal = this.carritoService.calcularPrecioTotal();
  }

  decrementarCantidad(producto: Producto) {
    if (producto.cantidad > 1) {
      producto.cantidad -= 1;
      this.precioTotal = this.carritoService.calcularPrecioTotal();
    }
  }

  calcularSubtotalProducto(producto: Producto): number {
    return producto.precio * producto.cantidad;
  }

  calcularPrecioTotal(): number {
    let total = 0;
    this.carrito.forEach((producto) => {
      total += this.calcularSubtotalProducto(producto);
    });
    return total;
  }

  realizarPago() {
    // Lógica para realizar el pago con Mercado Pago
    // Implementar la integración con Mercado Pago aquí

    // Por ejemplo, podrías redirigir a una página de pago de Mercado Pago
    window.location.href = 'https://www.mercadopago.com/pay';
  }

}
