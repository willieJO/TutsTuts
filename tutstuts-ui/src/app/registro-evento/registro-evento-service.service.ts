import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../core/model';
import { DatePipe } from '@angular/common';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegistroEventoServiceService {
  eventosUrl = 'http://localhost:8080/Evento/AdicionarEvento';
  eventoFindUrl = 'http://localhost:8080/Evento/';
  atualizarEventoUrl = 'http://localhost:8080/Evento/AtualizarEvento';
  constructor(private http: HttpClient, private auth:AuthService) {}

  enviar(evento: Evento): Promise<any> {
    const datePipe = new DatePipe('en-US');
    const dataFormatada = datePipe.transform(evento.data_evento, 'dd/MM/yyyy');
    evento.data_evento = dataFormatada;
    evento.user.id = this.auth.getUserIdFromToken() ?? 0;
    evento.ativo = 1;
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    if (evento.id != null && evento.id != 0 ) {
      return this.http.put(this.atualizarEventoUrl,evento, {headers}).toPromise();
    }
    return this.http.post(this.eventosUrl, evento, {headers}).toPromise();
  }
  findById(id:number): Promise<any> {
    const headers = { Authorization: 'Bearer ' + this.auth.getAccessToken() };
    return this.http.get(this.eventoFindUrl + id, {headers}).toPromise();
  }
}
