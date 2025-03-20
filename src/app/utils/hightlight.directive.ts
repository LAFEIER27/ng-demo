import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(public el:ElementRef) {
    this.el.nativeElement.style.transition= 'all .5s'
   }
   @HostListener('mouseenter') fn1(){
    this.el.nativeElement.style.backgroundColor = 'yellow'
   }
   @HostListener('mouseleave') fn2(){
    this.el.nativeElement.style.backgroundColor = ''
   }
}
