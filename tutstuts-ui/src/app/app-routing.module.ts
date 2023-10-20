import { RegistroOpcoesListComponent } from './registro-opcoes/registro-opcoes-list/registro-opcoes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEmpresaListComponent } from './registro-empresa/registro-empresa-list/registro-empresa-list.component';

const routes: Routes = [
  { path: 'empresa', component: RegistroEmpresaListComponent },
  { path: 'opcoes', component: RegistroOpcoesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
