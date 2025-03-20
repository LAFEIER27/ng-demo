import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service'

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  inpVal = ''
  constructor(public userService:UserService) { }
  changeName(){
    console.log(this.inpVal)
    this.userService.setUserName(this.inpVal)
  }

  ngOnInit(): void {
  }

}
