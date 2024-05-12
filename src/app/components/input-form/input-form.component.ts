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
    const { author, title, category, content } = this.article.value;
    const articleData = {
      author: author || '',
      title: title || '',
      category: category || '',
      content: content || '',
    };

    this.newArticle.emit(articleData);
    this.article.reset();
  }
}
