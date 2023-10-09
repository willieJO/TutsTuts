import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { MatIconModule } from '@angular/material/icon'; // Módulo de ícones do Angular Material
import { SidebarModule } from 'primeng/sidebar'; // Módulo do PrimeNG para a barra lateral
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ButtonModule,
    SidebarModule
  ],
  exports: [
    SlidebarComponent
  ]
})
export class CoreModule { }
