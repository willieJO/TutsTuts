
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  empresaUrl = 'http://localhost:8080/Usuario/AdicionarUsuarioEmpresa';

  constructor(
    private http: HttpClient
  ) { }


  registroempresa(registrar: Usuario): Promise<any> {

    return this.http.post(this.empresaUrl, registrar)
      .toPromise();
  }
}
