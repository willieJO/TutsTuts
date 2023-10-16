import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private cloudName = 'duondvpwq'; // Substitua pelo seu cloud_name
  private apiKey = '911368384479997'; // Substitua pelo seu api_key
  private uploadPreset = 'tutstuts'; // Substitua pelo seu upload_preset
  private cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    return this.http.post(this.cloudinaryUploadUrl, formData).toPromise();
  }
}
