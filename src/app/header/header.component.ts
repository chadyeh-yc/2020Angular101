import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitName = 'The Hello World Web';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitName = 'The Will Will Web';
    }, 2000);
  }

}
