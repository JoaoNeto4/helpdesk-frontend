import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.base_url}/clientes`);
  }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.base_url}/clientes/${id}`);
  }

  create(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.base_url}/clientes`, Cliente);
  }

  update(Cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.base_url}/clientes/${Cliente.id}`, Cliente);
  }

  delete(id: any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.base_url}/clientes/${id}`);
  }
}
