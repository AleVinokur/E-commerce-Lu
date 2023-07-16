import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortadasComponent } from './portadas/portadas.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: PortadasComponent },
      { path: 'productos', component: ProductosComponent },
    ]
  },
  { path: 'carrito', component: CarritoComponent },
  // Otras rutas si las tienes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
