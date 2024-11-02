import { Component } from '@angular/core';
import { NavesService } from '../../../services/naves.service';
import { nave } from '../../../../interfaces/nave';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-naves',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoNavesComponent {

  
  listaNaves : nave[] = [];
  

  constructor(
    private servicio: NavesService,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicio.getListado().subscribe((data) => {
       this.listaNaves = data.results;
     })
  }



}
