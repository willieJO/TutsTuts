import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Busca } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  baseUrl = 'http://localhost:8080/Evento/ObterEventosEUsuariosParaBusca'; // URL base da sua API

  constructor(private http: HttpClient) { }
  obterBusca() {
    return this.http.get<Busca[]>(this.baseUrl).toPromise();
  }
}
