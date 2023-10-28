import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegistrarService } from 'src/app/registro/registrar.service';
import { Usuario } from './../../core/model';

@Component({
  selector: 'app-registro-empresa-list',
  templateUrl: './registro-empresa-list.component.html',
  providers: [MessageService],
  styleUrls: ['./registro-empresa-list.component.css']
})
export class RegistroEmpresaListComponent {
  title = 'Registro Empresa';
  value = '';
  constructor(public registroService: RegistrarService,
    private router: Router, public messageService: MessageService) {}
  registro = new Usuario();

  enviar() {      
    this.registroService.registroempresa(this.registro)
      .then((response) => {
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
  
  
  }


