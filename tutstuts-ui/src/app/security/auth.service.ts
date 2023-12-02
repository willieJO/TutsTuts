import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private cnpjSubject = new BehaviorSubject<boolean>(this.getCnpjBoolean());
  cnpj$ = this.cnpjSubject.asObservable();
  private userIdSubject = new BehaviorSubject<number>(parseInt(localStorage.getItem('user_id') || '0'));
  userId$ = this.userIdSubject.asObservable();
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  obterCnpfUrl = 'http://localhost:8080/Usuario/ObterCnpjEmpresa';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.loadToken();
    window.addEventListener('storage', (event) => {
      if (event.key === 'cnpj') {
        this.cnpjSubject.next(this.getCnpjBoolean());
      }
      if (event.key === 'user_id') {
        const newUserId = parseInt(event.newValue || '0');
        this.userIdSubject.next(newUserId);
      }
    });
  }

  login(user: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.storeToken(response[`access_token`]);
        localStorage.setItem("user_id",this.getUserIdFromToken()?.toString() ?? "0");
        this.http.get(this.obterCnpfUrl + "/" + this.getUserIdFromToken()).toPromise()
        .then((response: any) => {
          localStorage.setItem('cnpj', response.cnpj);
          this.cnpjSubject.next(this.getCnpjBoolean());
          this.userIdSubject.next(parseInt(localStorage.getItem('user_id') || '0'));
        });
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário e/ou senha inválida!');
          }
        }

        return Promise.reject(response);
      });
  }

  private storeToken(token: string): void {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.storeToken(token);
    }
  }

  isAutenticado(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken['user_id']; 
    }
    return null;
  }
  getCnpjFromLocalStorage(): string {
    const valor = localStorage.getItem("cnpj");
    if (valor) {
      return valor;
    }
    return "";
  }
  getCnpjBoolean(): boolean {
    return localStorage.getItem('cnpj') !== null;
  }

}
