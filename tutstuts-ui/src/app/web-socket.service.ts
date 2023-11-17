import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Message } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<Message>;
  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:8080/websocket-example');
  }
  getMessages() {
    return this.socket$.asObservable();
  }
  sendMessage(message: Message) {
    this.socket$.next(message);
  }
}
