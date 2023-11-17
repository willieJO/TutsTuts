// chat.component.ts

import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  avatar: string;
}

interface Message {
  sender: string;
  text: string;
  timestamp: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {
    this.simulateReceivedMessage();
  }

  showUserList = true;
  selectedUser: User | null = null;
  currentUser = 'Usuário Atual';
  newMessage = '';
  messages: Message[] = [];

  simulateReceivedMessage() {
    const now = new Date().getTime();
    const simulatedSender = 'user 1'; // Simulando que a mensagem foi recebida do usuário selecionado
    this.messages.push({ sender: simulatedSender, text: 'Mensagem simulada', timestamp: now });
  }

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
      this.messages.push({ sender: this.currentUser, text: this.newMessage, timestamp: now });
      this.newMessage = '';
    }
  }
}
