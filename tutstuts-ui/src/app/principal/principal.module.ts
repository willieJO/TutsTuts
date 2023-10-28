import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InicioComponent} from './inicio/inicio.component'
import { CardModule, } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [InicioComponent, CardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CloudinaryModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CardModule,
  ], 
  exports: [InicioComponent]
})
export class PrincipalModule { }
