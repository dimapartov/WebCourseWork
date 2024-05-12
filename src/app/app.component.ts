import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ListComponent } from './list/list.component';
import { CreationMenuComponent } from './creation-menu/creation-menu.component';
import { ArchiveComponent } from './archive/archive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ListComponent,
    InputFormComponent,
    CreationMenuComponent,
    ArchiveComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WebCourseWork';
  articles: Array<{
    author: string;
    title: string;
    category: string;
    content: string;
  }> = [];

  archivedArticles: Array<{
    author: string;
    title: string;
    category: string;
    content: string;
  }> = [];

  onNewArticle(article: {
    author: string;
    title: string;
    category: string;
    content: string;
  }) {
    this.articles.push(article);
  }

  onArchiveArticle(index: number) {
    this.archivedArticles.push(this.articles[index]);
    this.articles.splice(index, 1);
  }
}
