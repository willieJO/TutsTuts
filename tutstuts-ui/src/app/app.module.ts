import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroEventoModule } from './registro-evento/registro-evento.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RegistroEventoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
