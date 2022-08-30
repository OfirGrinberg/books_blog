import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Admin from '../models/admin.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private myApi: string = 'http://localhost:1000/admin';
  private options: {} = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  login(body: Admin | {}) {
    this.http
      .post<{ token: string }>(`${this.myApi}/login`, body, this.options)
      .subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
          this.getAdmin();
        },
        (err) => alert(err.error)
      );
  }

  getAdmin() {
    const token = localStorage.getItem('token');
    token ? this.router.navigate(['/myblog']) : this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
