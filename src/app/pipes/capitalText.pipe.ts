import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'capitalizeText'
})

export class capitalizeTextPipe implements PipeTransform{
    transform(value: any) {
        if(!value) return '';
        return value.toUpperCase();
    }
}


// js framework
//SPA using routing
// features like HTTP, DI 
// UI building frame..
// 


// 1.Modular Development
// 2.Two way data binding 
//       open parenthesis corresponding with brackets
// 3.CRoss-platfrom dev
// 4.routing
// 5.DI
// 6.MVVM arch.

