import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cop',
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.scss'],
})
export class CopComponent implements OnInit {
  @Input() msg!: string;
  constructor() {
    console.log('oldData', this.msg);
  }

  ngOnInit(): void {}
  ngOnChanges() {
    console.log('newData', this.msg);
  }
  @Input()
  get nameVal(): string {
    return this._name;
  }
  set nameVal(nameVal: string) {
    this._name = (nameVal && nameVal.trim() + ' set') || '<no name set>';
  }
  private _name = '';
}
