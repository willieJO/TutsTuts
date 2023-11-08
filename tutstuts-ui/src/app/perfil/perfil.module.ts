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
import { ListaCurtidaComponent } from './lista-curtida/lista-curtida.component';
import { CardComponent } from '../principal/card/card.component';

@NgModule({
  declarations: [PerfilComponent, ListaCurtidaComponent, CardComponent],
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
  exports: [PerfilComponent, ListaCurtidaComponent],
})
export class PerfilModule {}
