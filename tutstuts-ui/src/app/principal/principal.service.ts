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
    return this.http.get(this.obterEventoUrl + "/" + this.auth.getUserIdFromToken()).toPromise();
  }
  obterEventoPorId(id:number): Promise<any> {
    return this.http.get(this.baseUrl + "/" + id).toPromise();
  }
  curtirEvento(curtida:Curtida) {
    const idUsuario = this.auth.getUserIdFromToken();
    if (idUsuario) {
      curtida.usuario_id = idUsuario;
    }
    this.http.post(this.curtirEventoUrl,curtida).toPromise();
  }
  obterEventosCurtidoPeloUsuario(): Promise<any> {
    return this.http.get(this.obterEventosCurtidoUrl + "/" + this.auth.getUserIdFromToken()).toPromise();
  }

}
