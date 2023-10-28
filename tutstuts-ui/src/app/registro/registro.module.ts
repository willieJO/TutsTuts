import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';;
import { RegistroListComponent } from './registro-list/registro-list.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from "primeng/password";
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    RegistroListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    TooltipModule,
    PasswordModule
  ],
  exports: [
    RegistroListComponent
  ]
})
export class RegistroModule { }