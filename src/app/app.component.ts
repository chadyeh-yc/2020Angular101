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

  data: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('/api/articles.json').subscribe((value) => {
      this.data = value;
    });
  }

  cleanKey() {
    this.key = '';
  }
}
