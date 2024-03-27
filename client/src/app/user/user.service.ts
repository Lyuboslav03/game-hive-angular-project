import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<UserForAuth>('/api/register', {
      username,
      email,
      password,
      rePassword
    }).pipe(tap((user) => {
      this.user$$.next(user);
    }))
  }
}
