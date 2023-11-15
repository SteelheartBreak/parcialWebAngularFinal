import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from 'src/app/interfaces/biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServicioService {

  constructor(private http: HttpClient) { }

  
  getBibliotecas(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>('http://localhost:8080/biblioteca/all');
  }
  agregarBiblioteca(biblio: Biblioteca) {
    return this.http.post('http://localhost:8080/biblioteca/add', biblio);
  }
}
