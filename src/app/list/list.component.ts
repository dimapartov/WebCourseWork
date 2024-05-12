import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, ArticleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() articles: Array<{
    author: string;
    title: string;
    category: string;
    content: string;
  }> = [];

  @Output() archiveArticle = new EventEmitter<number>();

  onDelete(index: number) {
    this.articles.splice(index, 1);
  }

  onArchive(index: number) {
    this.archiveArticle.emit(index);
  }
}
