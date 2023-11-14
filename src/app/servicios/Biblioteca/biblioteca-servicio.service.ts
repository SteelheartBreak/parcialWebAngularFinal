import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from 'src/app/interfaces/biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServicioService {

  constructor(private http: HttpClient) { }

  
  getLibros(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>('http://localhost:8090/biblioteca/all');
  }
}
