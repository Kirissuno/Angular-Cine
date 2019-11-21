import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-detalles-peli',
  templateUrl: './detalles-peli.component.html',
  styleUrls: ['./detalles-peli.component.css']
})
export class DetallesPeliComponent implements OnInit {
  titulo: String;
  pelicula: Pelicula;

  constructor(private router:Router, private route:ActivatedRoute, private pservice:PeliculaService) { }

  ngOnInit() {
    this.pelicula = new Pelicula();
    this.titulo = this.route.snapshot.params['titulo'];
    this.pservice.getPeli(this.titulo)
      .subscribe(data=>{
        this.pelicula = data;
      })
  }

  lista(){
    this.router.navigate(['filmografia']);
  }

}
