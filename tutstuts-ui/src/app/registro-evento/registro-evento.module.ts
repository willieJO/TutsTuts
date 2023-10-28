import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';

import { RegistroEventoListComponent } from './registro-evento-list/registro-evento-list.component';

@NgModule({
  declarations: [RegistroEventoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
  ],
  exports: [RegistroEventoListComponent],
})
export class RegistroEventoModule {}
