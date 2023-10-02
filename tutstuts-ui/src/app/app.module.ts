import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroEmpresaModule } from './registro-empresa/registro-empresa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroEmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
