import { RegistroEmpresaListComponent } from './registro-empresa-list/registro-empresa-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroEmpresaListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,

    TooltipModule
  ],
  exports: [
    RegistroEmpresaListComponent
  ]
})
export class RegistroEmpresaModule { }
