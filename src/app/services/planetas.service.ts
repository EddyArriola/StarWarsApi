import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/models';
import { planeta } from '../../interfaces/planetas';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'
  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<planeta[]>>{
    return this.http.get<ApiResponse<planeta[]>>(this.apiUrl + '/planets');

  }
}
