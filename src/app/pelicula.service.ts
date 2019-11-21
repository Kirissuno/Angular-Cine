import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private baseUrl = 'http://localhost:8080/filmografia';

  constructor(private http:HttpClient) { }

  getListaPelis(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getPeli(titulo: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/${titulo}`);
  }

  crearPeli(pelicula:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, pelicula);
  }

  updatePeli(pelicula:Object):Observable<Object>{
    return this.http.patch(`${this.baseUrl}`, pelicula);
  }

  borrarPeli(titulo:String): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${titulo}`);
  }
}
