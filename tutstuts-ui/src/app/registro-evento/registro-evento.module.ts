import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroEventoListComponent } from './registro-evento-list/registro-evento-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroEventoListComponent],
  imports: [CommonModule, FormsModule],
  exports: [RegistroEventoListComponent],
})
export class RegistroEventoModule {}
