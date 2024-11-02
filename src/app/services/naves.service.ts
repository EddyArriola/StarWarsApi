import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/models'
import { nave } from '../../interfaces/nave';
@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'
  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<nave[]>>{
    return this.http.get<ApiResponse<nave[]>>(this.apiUrl + '/vehicles');

  }

  public GetByID(id: number): Observable<nave> {
    return this._http.get<nave>(`${this.apiUrl}/${id}`);
  }


}
