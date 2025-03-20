import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName:string = 'admin'
  constructor() { }
  getusername(){
    return this.userName
  }
  setUserName(e:string){
    this.userName = e
  }
}
