import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Mensagem, Usuario } from 'src/app/core/model';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService ) {}
  users: Usuario[];
  @ViewChild('messagesContainer') messagesContainer: ElementRef; 

  private updateInterval: any; 
  ngOnInit(): void {
    try {
      
      this.chatService.obterUsuarios().then((e: Usuario[])=>{
        this.users = e.filter(usuario => usuario.id !== parseInt(localStorage.getItem("user_id")?? "0"));
      })
    } catch(e) {
      console.log(e);
    }

  }

  showUserList = true;
  selectedUser: Usuario | null = null;
  currentUser = 1;
  newMessage = '';
  messages: Mensagem[] = [];
  mensagensAnteriores: Mensagem[] = [];


  toggleUserList() {
    this.showUserList = !this.showUserList;
  }

  openChat(user: Usuario) {
    this.selectedUser = user;
    var isFirst = false;
    var fezUmaVez = false;
    this.updateInterval = setInterval(() => {
      this.chatService.obterMensagensDoUsuario(parseInt(localStorage.getItem("user_id") ?? "0"), user.id).then((e: Mensagem[]) => {
        if (isFirst) {
          this.scrollToBottom();
          isFirst = false;
          fezUmaVez = true;
        }
        this.messages = e;
        if(e.length > this.mensagensAnteriores.length) {
          this.scrollToBottom();
        }
        this.mensagensAnteriores = e;
        if (!isFirst && !fezUmaVez) {
          isFirst = true;
        }
      });
    }, 1000);
  }

  closeChat() {
    this.selectedUser = null;
    this.messages = [];
    this.mensagensAnteriores = [];
    clearInterval(this.updateInterval);
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendMessage() {
    if (this.selectedUser) {
      if(this.newMessage == "") {
        return;
      }
      const now = new Date().getTime();
      var mensagem: Mensagem = {
        mensagem: this.newMessage,
        id_usuario_origem: parseInt(localStorage.getItem("user_id") ?? "0"),
        id_usuario_destino: this.selectedUser.id,
        data_mensagem : now
      };
      this.chatService.enviarMensagem(mensagem);
      this.newMessage = "";
      this.scrollToBottom();
    }
  }
}
