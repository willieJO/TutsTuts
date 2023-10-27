import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroUsuario } from '../core/model';

@Injectable({

  providedIn: 'root'
})
export class RegistroserviceService {
  pessoasUrl = 'http://localhost:8080/Usuario/AdicionarUsuario';
  constructor(private http: HttpClient) { }

  enviar(exemplo : RegistroUsuario ): Promise<any> {
    return this.http.post(this.pessoasUrl, exemplo).toPromise();
  }
}
