import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem, Usuario } from 'src/app/core/model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatUrlBase = 'http://localhost:8080/Chat/';

  constructor(
    private http: HttpClient
  ) { }


  obterMensagensDoUsuario(id: number, destino: number): Promise<any> {
    return this.http.get(this.chatUrlBase + "ObterMensagemDoUsuario/" + id + "/destino/" + destino).toPromise();
  }
  obterUsuarios(): Promise<any> {
    return  this.http.get(this.chatUrlBase + "ObterUsuariosDoSistema").toPromise();
  }
  enviarMensagem(mensagem: Mensagem) {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(mensagem.data_mensagem, 'dd/MM/yyyy');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (formattedDate != null) {
      mensagem.data_mensagem = formattedDate;
    }
    this.http.post(this.chatUrlBase + "EnviarMensagem",mensagem, { headers }).toPromise();
  }
}
