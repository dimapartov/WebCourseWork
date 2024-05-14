import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
})
export class InputFormComponent {
  @Output() newArticle = new EventEmitter<{
    author: string;
    title: string;
    category: string;
    content: string;
  }>();

  article = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    category: new FormControl(''),
    content: new FormControl(''),
  });

  onSubmit() {
    const articleData = {
      author: this.article.value.author!,
      title: this.article.value.title!,
      category: this.article.value.category!,
      content: this.article.value.content!,
    };

    this.newArticle.emit(articleData);
  }
}
