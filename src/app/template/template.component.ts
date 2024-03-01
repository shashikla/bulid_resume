import { Component, OnInit } from '@angular/core';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit{

  data = "payal";

  generatePDF() {
    // // Source HTMLElement or a string containing HTML.
    var elementHTML:any = document.getElementById('invoice');

    const pdfOptions = {
      margin:10,
      filname : 'shashikla_waghmare_cv.pdf',
      image : { type: 'jpeg', quality: 0.98 },
      html2canvas : { scale:2 },
      jsPDF : { unit: 'mm', format: 'a4', orientation: 'portrait'},
      // mode: 'legacy',
      // margin: [0.6, 0.6, 1, 0.6],
      pagebreak: { mode: 'avoid'}
      // pagebreak: { mode: 'avoid-all', before: '#avoidThisId' } 
      // page-break-inside: avoid;page -break-after: avoid;page -break-before: avoid;
    };
    html2pdf().from(elementHTML).set(pdfOptions).save('shashikla_waghmare_cv.pdf');

    var data:any = document.getElementById('invoice');
  }

  ngOnInit(): void {
    console.log('====================================');
    console.log('====================================');
  }

  show(){
    const user = {
      username:"payal"
    }
  }
 

  
}
