import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Article from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private myApi: string = 'http://localhost:1000/articles';
  private options: {} = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  article!: Article[];

  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.myApi);
  }

  getOne(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.myApi}/${id}`);
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  add(body: Article | {}) {
    this.http
    .post<Article>(`${this.myApi}/new`, body, this.options)
      .subscribe(() => this.reload());
  }

  edit(id: number, body: Article | {}) {
    this.http
      .put<Article>(`${this.myApi}/edit/${id}`, body, this.options)
      .subscribe(() => this.reload());
  }

  remove(id: number) {
    this.http
      .delete<Article>(`${this.myApi}/remove/${id}`)
      .subscribe(() => this.reload());
  }
}
