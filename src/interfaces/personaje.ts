import { nave } from "./nave";
import { planeta } from "./planetas";

export interface personaje {
    id?: string;
    name: string;
    height: string; 
    hair_color: string;
    gender: string;
    homeworld: string;
    eye_color: string;
    url: string;
    vehicles: nave [];
    planets: planeta[];
}