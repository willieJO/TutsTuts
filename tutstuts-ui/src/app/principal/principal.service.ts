import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Curtida } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  baseUrl = 'http://localhost:8080/Evento';
  obterEventoUrl = 'http://localhost:8080/Evento/ObterEventos';
  curtirEventoUrl = 'http://localhost:8080/Curtida/CurtirEvento';
  obterEventosCurtidoUrl = 'http://localhost:8080/Curtida/ObterEventosCurtidoPeloUsuario';
  
  constructor(private http: HttpClient, private auth:AuthService) {}

  obterEventos(): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http.get(this.obterEventoUrl + "/" + this.auth.getUserIdFromToken(), {headers}).toPromise();
  }
  obterEventoPorId(id:number): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http.get(this.baseUrl + "/" + id, {headers}).toPromise();
  }
  curtirEvento(curtida:Curtida) {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    const idUsuario = this.auth.getUserIdFromToken();
    
    if (idUsuario) {
      curtida.usuario_id = idUsuario;
    }
    this.http.post(this.curtirEventoUrl,curtida, {headers}).toPromise();
  }
  obterEventosCurtidoPeloUsuario(): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    return this.http.get(this.obterEventosCurtidoUrl + "/" + this.auth.getUserIdFromToken(), {headers}).toPromise();
  }

}
