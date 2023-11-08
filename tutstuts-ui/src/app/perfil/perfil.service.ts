import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../core/model';
import { Observable } from 'rxjs';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  baseUrl = 'http://localhost:8080'; // URL base da sua API

  constructor(private http: HttpClient, private auth: AuthService) {}

  obterUsuarioPorId(): Observable<Usuario> {
    const url = `${this.baseUrl}/Usuario/${this.auth.getUserIdFromToken()}`;
    return this.http.get<Usuario>(url);
  }
  atualizarUsuario(usuario: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    if (localStorage.getItem('cnpj') != null) {
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
    return this.http
      .get(
        this.baseUrl + '/Evento/ObterEventos' + this.auth.getUserIdFromToken()
      )
      .toPromise();
  }
  obterEventosCurtidoPeloUsuario(): Promise<any> {
    return this.http
      .get(
        this.baseUrl +
          '/Curtida/ObterEventosCurtidoPeloUsuario' +
          this.auth.getUserIdFromToken()
      )
      .toPromise();
  }
}
