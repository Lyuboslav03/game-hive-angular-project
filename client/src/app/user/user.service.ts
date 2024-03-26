import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post('/api/register', {
      username,
      email,
      password,
      rePassword
    })
  }
}
