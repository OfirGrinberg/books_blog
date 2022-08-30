import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [''],
      author: [''],
      summary: [''],
      review: [''],
      image: [''],
    });
  }
}
