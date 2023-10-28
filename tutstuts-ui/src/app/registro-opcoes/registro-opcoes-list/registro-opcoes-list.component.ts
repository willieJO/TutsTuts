import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-opcoes-list',
  templateUrl: './registro-opcoes-list.component.html',
  styleUrls: ['./registro-opcoes-list.component.css']
})
export class RegistroOpcoesListComponent {
  constructor(private router:Router){

  }
  title = 'Escolha o seu tipo de Registro';

  registrarUsuario(){
    this.router.navigate(['registroUsuario']);
   }
   registrarUsuarioEmpresa(){
     this.router.navigate(['empresa']);
   }
}


