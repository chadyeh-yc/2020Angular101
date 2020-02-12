import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  item: Article;
  @Input()
  i: number;
  constructor() { }

  ngOnInit(): void {
  }

}
