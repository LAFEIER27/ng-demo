import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  msg=''
  getMsg(e:any){
    console.log('getmsg',e)
    this.msg = e
  }
  ngOnInit(): void {
  }

}
