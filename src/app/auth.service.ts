import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://green-shop-backend.onrender.com/api';
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  authStatus$ = this.authStatus.asObservable();
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`,
        { email, password }
      )
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('name', res.data.user.name);
          console.log(res.data.user.name);

          this.authStatus.next(true);
        })
      );
  }

  register(data: any): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
        data
      )
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('name', res.data.user.name);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');

    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
