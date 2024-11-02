import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { planeta } from '../../../../interfaces/planetas';
import { PlanetasService } from '../../../services/planetas.service';

@Component({
  selector: 'app-listado-planetas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoPlanetasComponent {

  
  listadoPlaneta : planeta[] = [];
  

  constructor(
    private servicio: PlanetasService,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicio.getListado().subscribe((data) => {
       this.listadoPlaneta = data.results;
     })
  }
}
