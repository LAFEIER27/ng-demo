import { Component, OnInit } from '@angular/core';
import {AgGridButtonComponent} from './modules/ag-grid-button';

@Component({
  selector: 'app-ag-test',
  templateUrl: './ag-test.component.html',
  styleUrls: ['./ag-test.component.css']
})
export class AgTestComponent implements OnInit {
  rowData: any[];
  columnDefs: any[];
  agGridColumnDefs = new AgGridButtonComponent();
  gridOptions: any = {
    // 行点击事件
    onRowClicked(event: any): void {
      const itxst = JSON.stringify(event.data);
      console.log('onRowClicked', event);
    },
    defaultColDef: {
      resizable: true, // 是否可以调整列大小，就是拖动改变列大小
      filter: false    // 开启刷选
    },
    rowSelection: 'multiple', // 设置多好可选
    rowMultiSelectWithClick: true, // 点击及选择复选框
    suppressCellSelection: true // 点击不选中单元格
  };
  constructor() {
    this.rowData = [
      // 定义你的数据行
      { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
      { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ];

    this.columnDefs = [
      // 定义你的列定义
      { field: 'make', headerName: '商品' },
      { field: 'model', headerName: '类型' },
      { field: 'price', headerName: '价格' },
      { field: 'electric', headerName: '存量' },
    ];
  }
  // 行点击事件，同gridOptions中的 onRowClicked配置
  rowClick(data: any): void {
    console.log('rowClick', data);
  }

  ngOnInit(): void {
  }

  protected readonly AgGridButtonComponent = AgGridButtonComponent;
}
