import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroEventoListComponent } from './registro-evento-list/registro-evento-list.component';

@NgModule({
  declarations: [RegistroEventoListComponent],
  imports: [CommonModule],
  exports: [RegistroEventoListComponent],
})
export class RegistroEventoModule {}
