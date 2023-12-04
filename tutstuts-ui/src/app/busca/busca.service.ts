import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Busca } from '../core/model';
import { AuthService } from '../security/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  baseUrl = 'http://localhost:8080/Evento/ObterEventosEUsuariosParaBusca'; // URL base da sua API

  constructor(private http: HttpClient, private auth:AuthService) { }
  obterBusca() {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http.get<Busca[]>(this.baseUrl, {headers}).toPromise();
  }
}
