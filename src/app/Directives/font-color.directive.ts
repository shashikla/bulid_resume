import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[appFontColor]'
})

export class fontColorDirective {
    constructor(private elementRef:ElementRef){
        this.elementRef.nativeElement.style.border="1px solid red";
    }
}