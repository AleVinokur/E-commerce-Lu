import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../producto.model'; // Importa la interfaz Producto

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: Producto[] = []; // Asigna el tipo de datos Producto[] a la variable carrito

  constructor(private carritoService: CarritoService) {
    this.carrito = this.carritoService.obtenerProductos();
  }

  actualizarCantidad(producto: Producto) {
    // Implementar la lógica para actualizar la cantidad de un producto en el carrito
  }

  eliminarProducto(producto: Producto) {
    // Implementar la lógica para eliminar un producto del carrito
  }

  realizarPago() {
    // Lógica para realizar el pago con Mercado Pago
    // Implementar la integración con Mercado Pago aquí
  }
}
