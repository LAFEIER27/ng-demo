import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) {}
  msg = '';
  val = '';
  resData: any = '';
  info: any = {
    name: '',
    psd: '',
  };
  getMsg(e: any): void {
    console.log('getmsg', e);
    this.msg = e;
  }
  getData = () => {
    this.userService.getUserInfo().then((data) => {
      console.log(data);
      this.resData = data;
    });
  };
  async login(): Promise<void> {
    console.log('login', this.info);
    this.userService.userLogin(this.info).then(async (data) => {
      console.log(data);
      if (data.data.code === 1) {
        this.userService.setUserName(data.data.name);
      }
      this.toast(data.msg);
    });
  }
  async toast(msg: string): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });

    console.log(await toast.present());
  }
  @ViewChild('myinput') myinput!: any;
  onClick(d: any) {
    console.log(d);
    this.val = this.myinput.el.value;
  }
  ngOnInit(): void {}
}
