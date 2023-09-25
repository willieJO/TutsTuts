import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MessageService],
  styleUrls: ['./login.component.css']
})
export class LoginUiComponent {
  constructor(private messageService: MessageService) { }
  showPassword = false;


  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
  
  title: string = 'Login';
  login = {   
     email: '' ,
     senha: ''
  }; 

  realizarLogin() {
    this.messageService.add({
      severity: 'success',
      summary: 'Login bem-sucedido',
      detail: 'Você foi autenticado com sucesso.',
      life: 2000 
    });
    
  }
  
}
