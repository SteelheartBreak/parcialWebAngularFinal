import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from 'src/app/interfaces/libro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibroServicioService {

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:8090/libro/all');
  }
}
