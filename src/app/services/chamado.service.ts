import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.base_url}/chamados`);
  }

  findById(id: any): Observable<Chamado>{
    return this.http.get<Chamado>(`${API_CONFIG.base_url}/chamados/${id}`);
  }

  create(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`${API_CONFIG.base_url}/chamados`, chamado)
  }

  update(chamado: Chamado): Observable<Chamado> {
    console.log(chamado);
    return this.http.put<Chamado>(`${API_CONFIG.base_url}/chamados/${chamado.id}`, chamado)
  }

}