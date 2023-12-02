import { RegistroserviceService } from './../../registro-empresa/registroservice.service';
import { Component } from '@angular/core';
import { RegistroUsuario } from 'src/app/core/model';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  providers: [MessageService],
  styleUrls: ['./registro-list.component.css']
})

export class RegistroListComponent {

  title = 'Registro Usuário';
  value = '';

  categorias = [
    { label: 'Nenhum', value: 'NENHUM' },
    { label: 'Festival', value: 'FESTIVAL' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Palestra', value: 'PALESTRA' },
    { label: 'Musical', value: 'MUSICAL' }
  ];

  constructor(public registroserviceService: RegistroserviceService,
    private messageService: MessageService,
    private router:Router
    ) {}

  registro = new RegistroUsuario();

    enviar() {
      this.registroserviceService.enviar(this.registro).then((response) => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Conta criada com sucesso',
            detail: 'Você está sendo redirecionado',
            life: 2000
          });
          setTimeout(() => {
            this.router.navigate(['/login']); // Redireciona após o segundo setTimeout
          }, 2200);
        }, 100);
      });
    }


    login() {

      this.router.navigate(['/login']); // Redireciona após o segundo setTimeout


    }
}
