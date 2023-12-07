import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cnpjSubject = new BehaviorSubject<boolean>(this.getCnpjBoolean());
  cnpj$ = this.cnpjSubject.asObservable();
  userIdSubject = new BehaviorSubject<number>(parseInt(localStorage.getItem('user_id') || '0'));
  userId$ = this.userIdSubject.asObservable();
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  obterCnpfUrl = 'http://localhost:8080/Usuario/ObterCnpjEmpresa';
  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke';
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

  cleanAccessToken(): void {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  getAccessToken(): string | null {
    return localStorage.getItem("token");
  }

  logout(): Promise<any> {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.cleanAccessToken();
      });
  }

  login(user: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.storeToken(response[`access_token`]);
        localStorage.setItem("user_id",this.getUserIdFromToken()?.toString() ?? "0");
        this.userIdSubject.next(parseInt(localStorage.getItem('user_id') || '0'));
        const newHeader = { Authorization: 'Bearer ' + this.getAccessToken() };

        this.http.get(this.obterCnpfUrl + "/" + this.getUserIdFromToken(), {headers:newHeader}).toPromise()
        .then((response: any) => {
          localStorage.setItem('cnpj', response.cnpj);
          this.cnpjSubject.next(this.getCnpjBoolean());
          
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

  getNewAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.storeToken(response[`access_token`]);

        console.log('Novo access token criado!');

        return Promise.resolve();
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve();
      });
  }

  isInvalidAccessToken(): boolean {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
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
