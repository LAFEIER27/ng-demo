import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  list: any[] = [
    {
      id: 1,
      name: '商品1',
      price: '100',
      count: '10',
    },
    {
      id: 2,
      name: '商品2',
      price: '120',
      count: '4',
    },
    {
      id: 3,
      name: '商品4',
      price: '50',
      count: '3',
    },
    {
      id: 4,
      name: '商品5',
      price: '1030',
      count: '2',
    },
    {
      id: 5,
      name: '商品6',
      price: '16',
      count: '76',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
