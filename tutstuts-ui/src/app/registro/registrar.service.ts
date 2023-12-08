
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../core/model';
import { AuthService } from '../security/auth.service';
@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  empresaUrl = 'http://localhost:8080/Usuario/AdicionarUsuarioEmpresa';

  constructor(
    private http: HttpClient,
    private auth:AuthService
  ) { }


  registroempresa(registrar: Usuario): Promise<any> {
    return this.http.post(this.empresaUrl, registrar)
      .toPromise();
  }
}
