import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploComponent } from './exemplo/exemplo.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExemploComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExemploComponent
  ]
})
export class ExemploModule { }
