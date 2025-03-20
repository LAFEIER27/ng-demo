import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  nowDate=new Date()
  timer:any = null
  constructor() {
    this.timer = setInterval(()=>{
      console.log('about tick')
      this.nowDate=new Date()
    },1000)
  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    clearInterval(this.timer)
    this.timer =null
  }

}
