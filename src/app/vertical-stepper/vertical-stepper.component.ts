import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss']
})
export class VerticalStepperComponent {
  steps = [1, 2, 3]; // Or you can fetch this array dynamically from API
  currentStep = 1;
  currentStepData: any;
  name: string = "";

  constructor(private userService: UserDataService, private route:ActivatedRoute){}
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userName = (params['name']).toLowerCase();
      this.name = userName.toUpperCase();
      this.userService.getDataByUser(userName).subscribe((user)=>{
        // this.resumeDetails = user;
        this.currentStepData = user.Details.Work_Experience;;
        console.log('====================================');
        console.log(this.currentStepData);
        console.log('====================================');
      });
    });
  }

}
