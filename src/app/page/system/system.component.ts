import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  list=[
    {
      path: 'about',
      text:'关于'
    },
    {
      path: 'me',
      text:'我的'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
