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
      imagen: '../../img/nail-makeup-beauty-facebook-banner-design-template-30a087d9706b012d69f59631ae0c77b0_screen.jpg',
      titulo: 'Portada 1'
    },
    {
      imagen: '../../img/Tamp-Nails-Cover_edited-1.jpg',
      titulo: 'Portada 2'
    },
    {
      imagen: '../../img/images.jpg',
      titulo: 'Portada 3'
    },
    // Agrega más portadas según tus necesidades
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      ($('.portadas-container') as any).carousel();
    }, 0);
  }
}
