import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  list = [
    {
      path: 'page1',
      text: '页面1',
    },
    {
      path: 'page2',
      text: '页面2',
    },
    {
      path: 'page3',
      text: '页面3',
    },
    {
      path: 'page4',
      text: '页面4',
    },
  ];
  ngOnInit(): void {}
}
