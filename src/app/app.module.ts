import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde @angular/forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortadasComponent } from './portadas/portadas.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component'; // No olvides importar CarritoComponent

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PortadasComponent,
    ProductosComponent,
    CarritoComponent // Asegúrate de agregar CarritoComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
