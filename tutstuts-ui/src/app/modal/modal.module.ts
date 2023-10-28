import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario/comentario.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComentarioComponent],
  imports: [
    CommonModule,
    FormsModule,
  ], exports: [ComentarioComponent]
})
export class ModalModule { }
