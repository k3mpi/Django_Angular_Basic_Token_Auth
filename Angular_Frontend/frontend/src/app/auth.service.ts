import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api'; // Ihre Django-API-URL hier

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/register/`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login/`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  // Hier können Sie weitere Methoden hinzufügen, z.B. logout und isLoggedIn

  // logout() {
  //   // Implementieren Sie die Logout-Logik hier
  // }

  // isLoggedIn(): boolean {
  //   // Überprüfen Sie, ob der Benutzer angemeldet ist
  // }
}
