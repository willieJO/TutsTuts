import { RegistroEmpresaListComponent } from './registro-empresa/registro-empresa-list/registro-empresa-list.component';
import { RegistroOpcoesListComponent } from './registro-opcoes/registro-opcoes-list/registro-opcoes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUiComponent } from './login/login/login.component'
import { InicioComponent  } from './principal/inicio/inicio.component';
import { AuthGuard } from './security/auth.guard'; // Importe o AuthGuard
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { BuscaComponent } from './busca/busca/busca.component';
import { RegistroEventoListComponent } from './registro-evento/registro-evento-list/registro-evento-list.component';
import { RegistroListComponent } from './registro/registro-list/registro-list.component';
import { EditarEventoComponent } from './editar-evento/editar-evento/editar-evento.component';

const routes: Routes = [
  { path: '', component: LoginUiComponent, canActivate: [AuthGuard]  },
  { path: 'principal', component: InicioComponent },
  { path: 'editarEvento', component: EditarEventoComponent },
  { path: 'principal/:id', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'perfil/:id', component: PerfilComponent},
  { path: 'busca', component: BuscaComponent },
  { path: 'registroUsuario', component: RegistroListComponent },
  { path: 'registroEvento', component: RegistroEventoListComponent },
  { path: 'registroEvento/:id', component: RegistroEventoListComponent },
  { path: 'empresa', component: RegistroEmpresaListComponent },
  { path: 'opcoes', component: RegistroOpcoesListComponent },
  { path: 'login', component: LoginUiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
