import { Component, OnInit } from '@angular/core';
import { personaje } from '../../../../interfaces/personaje';
import { PersonajesService } from '../../../services/personajes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-personaje',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoPersonajesComponent implements OnInit {
  listaPersonajes : personaje[] = [];
  
  constructor(
    private servicio: PersonajesService,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicio.getListado().subscribe((data) => {
       this.listaPersonajes = data.results;
     })
  }

}
