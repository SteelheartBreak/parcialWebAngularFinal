import { Component } from '@angular/core';
import { LibroServicioService } from '../servicios/Libro/libro-servicio.service';
import { BibliotecaServicioService } from '../servicios/Biblioteca/biblioteca-servicio.service';
import { Biblioteca } from '../interfaces/biblioteca';
import { Libro } from '../interfaces/libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  libros!: Libro[];
  bibliotecas!: Biblioteca[];
  constructor(private libroService: LibroServicioService, private bibliotecaService: BibliotecaServicioService) {
    
  }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(
      libros =>{ this.libros = libros
      console.log(this.libros)}
    )

    this.bibliotecaService.getBibliotecas().subscribe(
      bibliotecas =>{ this.bibliotecas = bibliotecas
      console.log(this.bibliotecas)}
    )

  }

}
