import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImgurService {
  private apiUrl = 'https://api.imgur.com/3/image';
  private clientId = 'ab8705f2e48302d'; // Substitua pelo seu Client ID

  constructor(private http: HttpClient) {}

  uploadImage(imageData: File): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.clientId}`,
    });

    const formData = new FormData();
    formData.append('image', imageData);

    return this.http.post(this.apiUrl, formData, { headers });
  }
}