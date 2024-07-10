import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {
  x1: number = 3;
  x2: number = 7;
  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderRadius = "12px";
    this.elementRef.nativeElement.style.boxShadow=`${this.x1}px 3px 5px`;
    
   }
   @HostListener('mouseover') func1(){
    this.elementRef.nativeElement.style.boxShadow = `${this.x2}px 3px 5px`;
  }

  @HostListener('mouseout') func2(){
    this.elementRef.nativeElement.style.boxShadow = `${this.x1}px 3px 5px`;
  }

  
}

