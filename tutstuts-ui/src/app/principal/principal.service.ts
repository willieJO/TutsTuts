import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../core/model';
import { DatePipe } from '@angular/common';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  obterEventoUrl = 'http://localhost:8080/Evento/ObterEventos';

  constructor(private http: HttpClient, private auth:AuthService) {}

  obterEventos(): Promise<any> {
    
    return this.http.get(this.obterEventoUrl + "/" + this.auth.getUserIdFromToken()).toPromise();
  }
 
}
