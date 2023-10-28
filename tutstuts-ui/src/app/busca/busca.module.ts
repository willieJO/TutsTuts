import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuscaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule
  ], 
  exports: [BuscaComponent]
})
export class BuscaModule { }
