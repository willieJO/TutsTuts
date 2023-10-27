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
  constructor(public registroService: RegistrarService) {}
  registro = new Usuario();

    enviar() {
      this.registroService.registroempresa(this.registro);
    }
  }


