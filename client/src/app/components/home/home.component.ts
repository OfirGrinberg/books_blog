import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Article from 'src/app/models/article.model';
import { AdminService } from 'src/app/services/admin.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles!: Article[];
  limit!: number;
  isAdminUrl = this.router.url === '/myblog';
  del!: boolean;
  isAdd!: boolean

  constructor(
    private articlesService: ArticlesService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.checkWidth();
    this.del = false;
    this.isAdd = false
  }

  getAll() {
    this.articlesService.getAll().subscribe(
      (res) => (this.articles = res),
      (err) => console.log(err)
    );
  }

  checkWidth() {
    window.innerWidth < 768 && window.innerWidth >= 480
      ? (this.limit = 20)
      : window.innerWidth < 480
      ? (this.limit = 15)
      : (this.limit = 65);
  }

  goToArticle(id: number) {
    const myNav = (route: string) => this.router.navigate([route, id]);
    this.isAdminUrl ? myNav('myblog/article') : myNav('/article');
  }
  
  remove(id: number) {
    this.del = !this.del;
    this.articlesService.remove(id);
  }

  addClicked() { this.isAdd = !this.isAdd; }
  
  logout() { this.adminService.logout(); }
}
