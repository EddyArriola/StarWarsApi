import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/models';
import { personaje } from '../../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'
  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<personaje[]>>{
    return this.http.get<ApiResponse<personaje[]>>(this.apiUrl + '/people');

  }
}
