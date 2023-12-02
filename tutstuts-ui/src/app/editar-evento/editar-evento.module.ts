import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button'
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [EditarEventoComponent],
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    ButtonModule,
  ]
})
export class EditarEventoModule { }
