import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pelis',
  templateUrl: './listar-pelis.component.html',
  styleUrls: ['./listar-pelis.component.css']
})

export class ListarPelisComponent implements OnInit {
  peliculas: Observable<Pelicula[]>

  constructor(private peliService: PeliculaService, private router: Router) { }

  ngOnInit() {
    console.log(this.peliculas)
    this.cargarLista();
  }

  cargarLista(){
    this.peliculas = this.peliService.getListaPelis();
  }

  detallesPeli(titulo:String){
    this.router.navigate(['filmografia', titulo])
  }

  volverIndex(){
    this.router.navigate(['']);
  }

}
