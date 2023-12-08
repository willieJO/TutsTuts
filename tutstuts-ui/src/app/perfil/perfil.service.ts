import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Curtida, Usuario } from '../core/model';
import { Observable } from 'rxjs';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  baseUrl = 'http://localhost:8080'; // URL base da sua API

  constructor(private http: HttpClient, private auth: AuthService) {}

  obterUsuarioPorId(): Observable<Usuario> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    const url = `${this.baseUrl}/Usuario/${this.auth.getUserIdFromToken()}`;
    return this.http.get<Usuario>(url, {headers});
  }
  carregarDadosDeVisualizacao(id:number): Observable<Usuario> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    const url = `${this.baseUrl}/Usuario/${id}`;
    return this.http.get<Usuario>(url, {headers});
  }
  atualizarUsuario(usuario: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getAccessToken()}`,
        'Content-Type': 'application/json',
      }),
    };
    if (localStorage.getItem('cnpj') != null) {
      usuario.cnpj = localStorage.getItem('cnpj') ?? '';
      return this.http
        .put(
          this.baseUrl + `/Usuario/AtualizarEmpresa/${usuario.id}`,
          usuario,
          httpOptions
        )
        .toPromise();
    }
    return this.http
      .put(
        this.baseUrl + `/Usuario/UsuarioComum/${usuario.id}`,
        usuario,
        httpOptions
      )
      .toPromise();
  }
  obterEventos(): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    return this.http
      .get(
        this.baseUrl + '/Evento/ObterEventos/' + this.auth.getUserIdFromToken(), {headers}
      )
      .toPromise();
  }
  obterEventosCurtidoPeloUsuario(id:number): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http
      .get(
        this.baseUrl +
          '/Curtida/ObterEventosCurtidoPeloUsuario/' +
          id, {headers}
      )
      .toPromise();
  }
  curtirEvento(curtida: Curtida) {
    const idUsuario = this.auth.getUserIdFromToken();
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    if (idUsuario) {
      curtida.usuario_id = idUsuario;
    }
    this.http.post(this.baseUrl + '/Curtida/CurtirEvento', curtida, {headers}).toPromise();
  }
}
