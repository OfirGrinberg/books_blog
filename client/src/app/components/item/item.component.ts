import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import Article from 'src/app/models/article.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  article!: Article;
  articleId = this.route.snapshot.paramMap.get('id');
  isAdminUrl = this.router.url === `/myblog/article/${this.articleId}`;
  isEditClicked!: boolean;

  constructor(
    private articelsService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArticle();
    this.isEditClicked = false;
  }

  getArticle() {
    const id = Number(this.articleId);
    this.articelsService.getOne(id).subscribe(
      (res) => (this.article = res[0]),
      (err) => console.log(err)
    );
  }

  editClick() { this.isEditClicked = !this.isEditClicked; }

  back() { this.location.back(); }
}
