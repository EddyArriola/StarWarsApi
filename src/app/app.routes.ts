import { Routes } from '@angular/router';
import { ListadoNavesComponent } from './components/naves/listado/listado.component';
import { ListadoPlanetasComponent } from './components/planetas/listado/listado.component';
import { ListadoPersonajesComponent } from './components/personaje/listado/listado.component';

export const routes: Routes = [
    {path: 'naves', component: ListadoNavesComponent},
    {path: 'planetas', component: ListadoPlanetasComponent},
    {path: 'personajes', component: ListadoPersonajesComponent}
];
