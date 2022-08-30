import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import Article from 'src/app/models/article.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() article!: Article;

  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [this.article.title],
      author: [this.article.author],
      summary: [this.article.summary],
      review: [this.article.review],
      image: [this.article.image],
    });
  }
}
