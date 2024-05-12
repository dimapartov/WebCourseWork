import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListComponent } from '../list/list.component';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-creation-menu',
  standalone: true,
  imports: [InputFormComponent, HeaderComponent, ListComponent],
  templateUrl: './creation-menu.component.html',
  styleUrl: './creation-menu.component.scss',
})
export class CreationMenuComponent {
  @Output() newArticle = new EventEmitter<{
    author: string;
    title: string;
    category: string;
    content: string;
  }>();

  @ViewChild(InputFormComponent)
  inputFormComponent!: InputFormComponent;

  constructor() {
    this.inputFormComponent = new InputFormComponent();
  }

  ngAfterViewInit() {
    this.inputFormComponent.newArticle.subscribe((article) =>
      this.newArticle.emit(article)
    );
  }
}
