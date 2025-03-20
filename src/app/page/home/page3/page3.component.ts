import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  msg = 'data1';
  nameVal = '';
  constructor() {
    setTimeout(() => {
      this.msg = 'data2';
    }, 1000);
  }

  ngOnInit(): void {}
}
