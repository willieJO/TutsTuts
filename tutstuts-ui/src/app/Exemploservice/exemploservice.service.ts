import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exemplo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ExemploserviceService {
  pessoasUrl = 'http://localhost:8080/Usuario/AdicionarUsuario';
  constructor(private http: HttpClient) { }

  enviar(exemplo : Exemplo ): Promise<any> {
    return this.http.post(this.pessoasUrl, exemplo).toPromise();
  }
}
