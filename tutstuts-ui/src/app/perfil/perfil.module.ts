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
import { CardComponent } from './card/card.component';
import { CardModule } from 'primeng/card';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { CloudinaryModule } from '@cloudinary/ng';
import { MatButtonModule } from '@angular/material/button';

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
    MatCardModule,
    MatIconModule,
    CardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CloudinaryModule,
    MatButtonModule,
  ],
  exports: [PerfilComponent],
})
export class PerfilModule {}
