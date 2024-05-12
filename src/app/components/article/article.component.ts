import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article = {
    title: 'Article Title',
    category: 'Article Category',
    author: 'Article Author',
    content: 'Article Content',
  };

  @Output() deleteArticle = new EventEmitter<void>();

  @Output() archiveArticle = new EventEmitter<void>();

  onDelete() {
    this.deleteArticle.emit();
  }

  onArchive() {
    this.archiveArticle.emit();
  }
}
