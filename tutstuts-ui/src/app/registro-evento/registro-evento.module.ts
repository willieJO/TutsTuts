import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

import { RegistroEventoListComponent } from './registro-evento-list/registro-evento-list.component';

@NgModule({
  declarations: [RegistroEventoListComponent],
  imports: [CommonModule, FormsModule, ButtonModule, TooltipModule],
  exports: [RegistroEventoListComponent],
})
export class RegistroEventoModule {}
