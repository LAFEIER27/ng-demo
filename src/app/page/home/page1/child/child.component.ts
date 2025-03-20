import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  sendmsg = ''
  @Output() sendMsg = new EventEmitter()
  constructor() { }
  senData(){
    console.log('msg',this.sendmsg)
    this.sendMsg.emit(this.sendmsg)
  }

  ngOnInit(): void {
  }

}
