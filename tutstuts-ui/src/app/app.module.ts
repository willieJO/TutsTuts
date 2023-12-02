import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { RegistroEmpresaModule } from './registro-empresa/registro-empresa.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';
import { EditarEventoModule } from './editar-evento/editar-evento.module';
EditarEventoModule
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    EditarEventoModule,
    ModalModule,
    BuscaModule,
    ChatModule,
    PrincipalModule,
    HttpClientModule,
    PerfilModule,
    CoreModule,
    SecurityModule,
    RegistroEventoModule,
    BrowserAnimationsModule,
    RegistroModule,
    RegistroEmpresaModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
