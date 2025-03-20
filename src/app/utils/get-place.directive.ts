import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appGetPlace]',
})
export class GetPlaceDirective {
  bool!: boolean;
  constructor(
    public el: ElementRef,
    public tr: TemplateRef<any>,
    public vc: ViewContainerRef
  ) {
    // this.el.nativeElement.addEventListener('click', (e: any) => {
    //   console.log(e.target);
    //   this.cb('1234');
    // });
    console.log(this.tr.elementRef.nativeElement);
  }
  @Input() set appGetPlace(bool: boolean) {
    if (bool) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tr);
    }

    // this.vc.clear();
    // 传给指令内部的数据
    // console.log(this.tr, this.vc);
    // this.cb = content;
  }
}
