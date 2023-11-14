import { Biblioteca } from "./biblioteca";

export interface Libro {
    id: number;
    nombre: string;
    autor: string;
    biblioteca: Biblioteca;
}
