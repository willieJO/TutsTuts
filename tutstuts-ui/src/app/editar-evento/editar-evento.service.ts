import { Injectable } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditarEventoService {
  eventosUrl = 'http://localhost:8080/Evento/';
  constructor(private auth:AuthService, private http: HttpClient) { }

  findById(): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http.get(this.eventosUrl + "ObterEventosDesseUsuario/" + this.auth.getUserIdFromToken(),{headers}).toPromise();
  }
  removeById(id:number) {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };

    return this.http.delete(this.eventosUrl + "ExcluirUsuario/" + id, {headers}).toPromise();
  }
}
