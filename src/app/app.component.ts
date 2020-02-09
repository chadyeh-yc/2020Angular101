import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key = '';
  title = 'demo1';

  cleanKey() {
    this.key = '';
  }
}
