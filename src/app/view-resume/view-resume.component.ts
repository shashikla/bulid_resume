import { Component, ViewChild, AfterViewInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2PDF from 'jspdf-html2canvas';
import { UserDataService } from '../user-data.service';
import html2pdf from 'html2pdf.js';
import { ActivatedRoute } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

interface User {
  Name: string;
  Details: {
    [key: string]: string;
  };
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.scss']
})
export class ViewResumeComponent {
  constructor(private route: ActivatedRoute,
    private userService: UserDataService) { }

    @ViewChild('stepper') stepper!: MatStepper;

  userData: User[] = [];
  resumeDetails: any;
  name: string = "";
  techStack: string[] = [];
  stepsData: any[] = [];
  selectedStepIndex: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userName = (params['name']).toLowerCase();
      this.name = userName.toUpperCase();
      this.userService.getDataByUser(userName).subscribe((user)=>{
        this.resumeDetails = user;
        this.techStack = this.resumeDetails.Details.Technologies;
        this.stepsData = this.resumeDetails.Details.Work_Experience;
        setTimeout(() => {
          this.stepper.selectedIndex = this.stepsData.length - 1; // Set selectedIndex after a short delay
        }, 0);
        console.log(this.resumeDetails.Details.Technologies);
      });
    });
  }

  // stepSelectionChange(event: StepperSelectionEvent): void {
  //   this.selectedStepIndex = event.selectedIndex;
  // }

 

  generatePDF() {
    // // Source HTMLElement or a string containing HTML.
    var elementHTML:any = document.getElementById('invoice');

    const pdfOptions = {
      // margin:10,
      filname : 'resume.pdf',
      image : { type: 'jpeg', quality: 0.98 },
      html2canvas : { },
      jsPDF : { format: 'a4', orientation: 'portrait'},
      mode: 'legacy',
      margin: [0.2, 0.1, 0.6, 0.2],
      pagebreak: { after: 'section'}
    };
    html2pdf().from(elementHTML).set(pdfOptions).save('resume.pdf');

    var data:any = document.getElementById('invoice');
  }

  generateNew3Pdf(){
    var elementHTML:any = document.getElementById('invoice');
    html2canvas(elementHTML).then(canvas => {
      var imgWidth = 150;
      var pageHeight = 200;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  'p', 'mm', 'a4'
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf');
    })
  }

  generateNew1Pdf() {
    const content:any = document.getElementById('invoice');

    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('generated-pdf.pdf');
    });
  }

  generateNewPdf(){
    const element:any = document.getElementById('invoice');
    const opt = {
      margin:       [15,15],
      filename:     'resume-pdf.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1.5, letterRendering: true  },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:'css'
      // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().from(element).set(opt).save();
  }

}
