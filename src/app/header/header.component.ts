import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitName = 'The Hello World Web';
  subTitle = '記載著 Will 在網路世界的學習心得與技術分享';
  imgSrc = '/assets/images/logo.png';
  showIcons = false;
  fontSize = 24;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitName = 'The Will Will Web';
    }, 2000);
  }

  changeTitle(event: MouseEvent) {
    if (event.ctrlKey) {
      this.sitName += '!';
    }
  }

  changeSize(event: WheelEvent) {
    // console.log(event);

    if (event.deltaY > 0) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }

    event.preventDefault();
  }
}
