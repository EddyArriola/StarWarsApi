import { personaje } from "./personaje";

export interface planeta {
    id?: string;
    name: string;
    rotation_period: string; 
    orbital_period: string;
    surface_water: string;
    population: string;
    gravity: string;
    url: string;
    residents: personaje[];
}