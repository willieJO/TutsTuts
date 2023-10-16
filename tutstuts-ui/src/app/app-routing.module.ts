import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUiComponent } from './login/login/login.component'
import { InicioComponent  } from './principal/inicio/inicio.component';
import { AuthGuard } from './security/auth.guard'; // Importe o AuthGuard
import { PerfilComponent } from './perfil/perfil/perfil.component';
const routes: Routes = [
  { path: '', component: LoginUiComponent, canActivate: [AuthGuard]  },
  { path: 'principal', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'login', component: LoginUiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
