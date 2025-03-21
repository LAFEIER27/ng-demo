import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(public roter: Router) {}

  ngOnInit(): void {}
  goHome() {
    this.roter.navigate(['home']);
  }
}
