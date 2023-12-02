import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { MatIconModule } from '@angular/material/icon'; // Módulo de ícones do Angular Material
import { SidebarModule } from 'primeng/sidebar'; // Módulo do PrimeNG para a barra lateral
import { ButtonModule } from 'primeng/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SlidebarmobileComponent } from './slidebarmobile/slidebarmobile.component';
@NgModule({
  declarations: [
    SlidebarComponent,
    SlidebarmobileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ButtonModule,
    SidebarModule
  ],
  exports: [
    SlidebarComponent,
    SlidebarmobileComponent,
  ]
})
export class CoreModule { }
