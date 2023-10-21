import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../core/model';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class RegistroEventoServiceService {
  eventosUrl = 'http://localhost:8080/Evento/AdicionarEvento';
  constructor(private http: HttpClient) {}

  enviar(evento: Evento): Promise<any> {
    const datePipe = new DatePipe('en-US');
    const dataFormatada = datePipe.transform(evento.data_evento, 'dd/MM/yyyy');
    evento.data_evento = dataFormatada;
    return this.http.post(this.eventosUrl, evento).toPromise();
  }
}
