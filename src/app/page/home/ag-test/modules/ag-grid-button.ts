import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button (click)="onClick($event)">{{ label }}21212</button>
  `,
  styles: [
    `button {
      padding: 4px 8px;
      cursor: pointer;
      background: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
    }`
  ]
})
export class AgGridButtonComponent {
  label = 'Click';

  public params: any;

  // 必须实现的方法
  agInit(params: any): void {
    this.label = params.label || 'Click';
    // 可以传递更多参数（例如数据 ID）
    this.params = params;
  }


  onClick(event: MouseEvent): void {
    if (this.params.onClick) {
      this.params.onClick(this.params.data); // 触发父组件回调
    }
    event.stopPropagation(); // 阻止事件冒泡
  }
}

