import { WebSocketService } from './../../web-socket.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/core/model';
interface User {
  name: string;
  avatar: string;
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private webSocketService: WebSocketService ) {}

  ngOnInit(): void {
    try {
      this.webSocketService.getMessages().subscribe((message : any) => {
        this.messages.push(message);
      });
    } catch(e) {
      console.log(e);
    }

  }

  showUserList = true;
  selectedUser: User | null = null;
  currentUser = 1;
  newMessage = '';
  messages: Message[] = [];

  users: User[] = [
    { name: 'User 1', avatar: 'https://res.cloudinary.com/duondvpwq/image/upload/v1697344132/uexc4falwmplpyz0xmrx.jpg' },
    { name: 'User 2', avatar: 'https://res.cloudinary.com/duondvpwq/image/upload/v1697344132/uexc4falwmplpyz0xmrx.jpg' },
    // Adicione mais usuários conforme necessário
  ];

  toggleUserList() {
    this.showUserList = !this.showUserList;
  }

  openChat(user: User) {
    this.selectedUser = user;
  }

  closeChat() {
    this.selectedUser = null;
  }

  sendMessage() {
    if (this.selectedUser) {
      const now = new Date().getTime();
      this.webSocketService.sendMessage({ mensagem: this.newMessage, data: now, id_usuario_destino: 2, id_usuario_origem: 1 });
      this.newMessage = '';
    }
  }
}
