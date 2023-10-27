import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUiComponent } from './login/login/login.component'
import { InicioComponent  } from './principal/inicio/inicio.component';
import { AuthGuard } from './security/auth.guard'; // Importe o AuthGuard
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { BuscaComponent } from './busca/busca/busca.component';
import { RegistroEventoListComponent } from './registro-evento/registro-evento-list/registro-evento-list.component';

const routes: Routes = [
  { path: '', component: LoginUiComponent, canActivate: [AuthGuard]  },
  { path: 'principal', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'busca', component: BuscaComponent},
  { path: 'registroEvento', component: RegistroEventoListComponent },
  { path: 'login', component: LoginUiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
