import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { LoginUiComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginUiComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    RouterModule,
    ToastModule,
    InputTextModule,
    TooltipModule,
    ButtonModule,
    PasswordModule
  ],
  exports: [
    LoginUiComponent
  ]
})
export class LoginModule { }
