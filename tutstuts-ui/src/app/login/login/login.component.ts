import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MessageService],
  styleUrls: ['./login.component.css']
})
export class LoginUiComponent {
  constructor(private messageService: MessageService, 
    private auth: AuthService, 
    private router: Router,
    private route: ActivatedRoute  ) {

   }  
   
  showPassword = false;
  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  title: string = 'Login';
   login = {
     email: "",
     senha: ""
  };

  esqueceuSenha() {
    this.messageService.add({
      severity: 'info',
      summary: 'Esqueceu a senha',
      detail: 'Em breve',
      life: 2000
    });
  }
  realizarLogin(){
    if(this.login.email == "" || this.login.email == null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'O email e obrigatorio',
        life: 2000
      });
      return;
    }
    this.auth.login(this.login.email, this.login.senha)
    .then((e) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Login bem-sucedido',
        detail: 'Você foi autenticado com sucesso.',
        life: 2000
      });
      this.router.navigate(['/principal']);
    })
    .catch((e) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Credenciais invalidas',
        life: 2000
      });
    })
  }


}
