import { RegistroserviceService } from './../../registro-empresa/registroservice.service';
import { Component } from '@angular/core';
import { RegistroUsuario } from 'src/app/core/model';


@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})

export class RegistroListComponent {
  title = 'Registro Usuário';
  value = '';
  constructor(public registroserviceService: RegistroserviceService) {}
  registro = new RegistroUsuario();

    enviar() {
      this.registroserviceService.enviar(this.registro);
    }



}
