import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEventoListComponent } from './registro-evento/registro-evento-list/registro-evento-list.component';

const routes: Routes = [
  { path: '', component: RegistroEventoListComponent },
  { path: 'registroEvento', component: RegistroEventoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
