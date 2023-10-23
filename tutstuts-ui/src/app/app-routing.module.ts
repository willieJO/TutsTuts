import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroListComponent } from './registro/registro-list/registro-list.component';

const routes: Routes = [
  { path: 'registroUsuario', component: RegistroListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


