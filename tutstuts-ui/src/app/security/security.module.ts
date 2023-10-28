import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    }),
  ],
  exports: [

  ],
  providers: [
    JwtHelperService
  ]
})
export class SecurityModule { }
