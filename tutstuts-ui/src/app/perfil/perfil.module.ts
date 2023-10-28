import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    ToastModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    InputTextModule,

  ],
  exports: [PerfilComponent]
})
export class PerfilModule { }
