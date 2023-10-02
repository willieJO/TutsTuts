import { RegistroEmpresaListComponent } from './registro-empresa-list/registro-empresa-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    RegistroEmpresaListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    RegistroEmpresaListComponent
  ]
})
export class RegistroEmpresaModule { }
