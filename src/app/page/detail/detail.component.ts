import { Component, OnInit } from '@angular/core';
// 浏览器url服务
import { Location } from '@angular/common';
// 路由对象
import { ActivatedRoute } from '@angular/router';
// 路由实例
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id!: number;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public location: Location
  ) {
    // this.route.params.subscribe((res) => {
    //   // console.log(res);
    //   this.id = res.id;
    // });
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.id = res.id;
    });
  }
  next() {
    console.log(
      `${this.router.url.replace(`id=${this.id}`, `id=${+this.id + 1}`)}`
    );
    const byUrl = `${this.router.url.replace(
      `id=${this.id}`,
      `id=${+this.id + 1}`
    )}`;
    this.router.navigateByUrl(byUrl);
  }
  back() {
    // 1.back
    this.location.back();
    // console.log(this.route, this.router);

    // console.log(this.route.parent?.url);
  }
  goHome() {
    this.router.navigate(['home'], { queryParams: { from: 'detail' } });
  }
  ngOnInit(): void {}
}
