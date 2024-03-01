import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private elementRef:ElementRef) {

    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    
   }

}
