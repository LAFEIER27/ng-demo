import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  // @ViewChild('modal') modal: any;
  isLoding: boolean = true;
  constructor(private modalCtrl: ModalController) {
    this.reflash();
  }
  name!: string;
  reflash() {
    this.isLoding = true;
    setTimeout(() => {
      this.isLoding = false;
    }, 2000);
  }
  async openModal() {
    console.log('openModal', this.modalCtrl);
    const modal = await this.modalCtrl.create({
      component: ModalContentComponent, // 指定模态框内容组件
    });
    // 打开弹窗
    await modal.present();
    //弹窗状态改变
    const { data, role } = await modal.onWillDismiss();
    if (role !== 'confirm') return;
    this.name = '你的名字' + data;
    console.log('data', data, role);
  }
  handleReorder(event: any) {
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    event.detail.complete();
  }

  ngOnInit(): void {}
}
