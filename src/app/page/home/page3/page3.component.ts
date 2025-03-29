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
  list: any[] = [
    {
      id: 1,
      name: '张三',
      hobby: ['唱', '跳'],
    },
    {
      id: 2,
      name: '李四',
      hobby: ['唱', 'rap'],
    },
    {
      id: 3,
      name: '王五',
      hobby: ['练球', '跳'],
    },
  ];
  ngOnInit(): void {}
}
