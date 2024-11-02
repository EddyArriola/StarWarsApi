import { personaje } from "./personaje";

export interface nave {
    id?: string;
    name: string;
    model: string; 
    manufacturer: string;
    max_atmosphering_speed: string;
    passengers: string;
    cargo_capacity: string;
    url: string;
    pilots: personaje[];
}