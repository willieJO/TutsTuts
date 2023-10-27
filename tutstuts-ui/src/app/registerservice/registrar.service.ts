
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


  registroempresa(registro: Usuario): Promise<any> {

    return this.http.post(this.empresaUrl, registro)
      .toPromise();
  }
}
