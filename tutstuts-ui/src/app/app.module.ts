import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SecurityModule } from './security/security.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { PrincipalModule } from './principal/principal.module';
import { PerfilModule } from './perfil/perfil.module';
import { ModalModule } from './modal/modal.module';
import { BuscaModule } from './busca/busca.module';
import { RegistroEventoModule } from './registro-evento/registro-evento.module';
import { RegistroModule } from './registro/registro.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ModalModule,
    BuscaModule,
    PrincipalModule,
    PerfilModule,
    CoreModule,
    HttpClientModule,
    SecurityModule,
    RegistroEventoModule,
    BrowserAnimationsModule,
    RegistroModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
