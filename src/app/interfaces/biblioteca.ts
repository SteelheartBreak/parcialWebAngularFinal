import { Libro } from "./libro";

export interface Biblioteca {
    id: number;
    nombre: string;
    direccion: string;
    ciudad: string;
    libros: Libro[];
    

}
