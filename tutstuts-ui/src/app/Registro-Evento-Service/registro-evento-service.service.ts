import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../core/Evento/model';

@Injectable({
  providedIn: 'root',
})
export class RegistroEventoServiceService {
  eventosUrl = 'http://localhost:8080/Evento/AdicionarEvento';
  constructor(private http: HttpClient) {}

  enviar(evento: Evento): Promise<any> {
    return this.http.post(this.eventosUrl, evento).toPromise();
  }
}
