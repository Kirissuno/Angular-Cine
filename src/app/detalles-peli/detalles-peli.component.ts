import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-detalles-peli',
  templateUrl: './detalles-peli.component.html',
  styleUrls: ['./detalles-peli.component.css']
})
export class DetallesPeliComponent implements OnInit {
  titulo: String;

  constructor(private router:Router, private route:ActivatedRoute, private pservice:PeliculaService) { }

  ngOnInit() {
  }

}
