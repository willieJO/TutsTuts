import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InicioComponent} from './inicio/inicio.component'
import { CardModule, } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [InicioComponent, CardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CardModule,
  ], 
  exports: [InicioComponent]
})
export class PrincipalModule { }
