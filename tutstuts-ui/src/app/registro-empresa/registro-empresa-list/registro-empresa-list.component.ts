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
  categorias = [
    { label: 'Nenhum', value: 'NENHUM' },
    { label: 'Festival', value: 'FESTIVAL' },
    { label: 'Show', value: 'SHOW' },
    { label: 'Palestra', value: 'PALESTRA' },
    { label: 'Musical', value: 'MUSICAL' }
  ];
  constructor(public registroService: RegistrarService,
    private router: Router, public messageService: MessageService) {}
    registro = new Usuario();
    exibirErroCnpj: boolean = false;

  enviar() {
    this.exibirErroCnpj = false;
    if (!this.validarCnpjFormato(this.registro.cnpj)) {
      this.exibirErroCnpj = true;
      return; // Não prosseguir com o registro se o CNPJ não for válido
    }
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
      }).catch(e => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Verifique todas as informações',
          life: 2000
        });
      })
  }
  validarCnpjFormato(cnpj: string): boolean {
    return cnpj.length === 14;
  }
  login() {
    this.router.navigate(['/login']); 
  }
  
 
  
  }


