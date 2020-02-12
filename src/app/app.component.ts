import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  key = '';
  title = 'demo1';
  subTitle = '記載著 Chad 在網路世界的學習心得與技術分享';
  data: Article[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Article[]>('/api/articles.json').subscribe((value) => {
      this.data = value;
    });
  }

  cleanKey() {
    this.key = '';
  }

  headerClickLogo(str: string) {
    this.key = str;
  }
}
export interface Article {
  id: number;
  href: string;
  title: string;
  date: string;
  author: string;
  category: string;
  'category-link': string;
  summary: string;
}
