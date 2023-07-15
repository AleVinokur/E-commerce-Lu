import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-portadas',
  templateUrl: './portadas.component.html',
  styleUrls: ['./portadas.component.css']
})
export class PortadasComponent implements AfterViewInit {
  portadas = [
    {
      imagen: '../../img/images.jpg',
      titulo: 'Portada 1',
      descripcion: 'Descripción de la portada 1'
    },
    {
      imagen: '../../img/images.jpg',
      titulo: 'Portada 2',
      descripcion: 'Descripción de la portada 2'
    },
    {
      imagen: '../../img/images.jpg',
      titulo: 'Portada 3',
      descripcion: 'Descripción de la portada 3'
    },
    // Agrega más portadas según tus necesidades
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      ($('.portadas-container') as any).carousel();
    }, 0);
  }
}
