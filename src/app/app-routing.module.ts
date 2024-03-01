import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaneTemplateComponent } from './plane-template/plane-template.component';
import { FormResumeComponent } from './form-resume/form-resume.component';
import { TemplateComponent } from './template/template.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';




const routes: Routes = [ 
  {
    path: '',
    component: HomepageComponent
  },
  {
    // path : 'details/:name', component: PlaneTemplateComponent
    path : 'details/:name', component: ViewResumeComponent
  },
  {
    path : 'form-fill/:name', component: FormResumeComponent
  },
  {
    path : 'resume-template', component: TemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
