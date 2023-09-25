import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MessageService],
  styleUrls: ['./login.component.css']
})
export class LoginUiComponent {
  constructor(private messageService: MessageService) {

   }

  showPassword = false;
  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  title: string = 'Login';
  login = {
     email: null,
     senha: null
  };

  esqueceuSenha() {
    this.messageService.add({
      severity: 'info',
      summary: 'Esqueceu a senha',
      detail: 'Em breve',
      life: 2000
    });
  }

  realizarLogin() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    if (numeroAleatorio % 2 == 0) {
      this.messageService.add({
        severity: 'success',
        summary: 'Login bem-sucedido',
        detail: 'Você foi autenticado com sucesso.',
        life: 2000
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Credenciais invalidas',
        life: 2000
      });
    }


  }

}
