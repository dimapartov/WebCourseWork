import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [HeaderComponent, ArticleComponent, NgFor],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
})
export class ArchiveComponent {
  @Input() articles: Array<{
    author: string;
    title: string;
    category: string;
    content: string;
  }> = [];
}
