import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PlaneTemplateComponent } from './plane-template/plane-template.component';
import {MatDividerModule} from '@angular/material/divider';
import { FormResumeComponent } from './form-resume/form-resume.component';
import { TemplateComponent } from './template/template.component';
import { TextColorDirective } from './Directives/text-color.directive';
import { fontColorDirective } from './Directives/font-color.directive';
import { capitalizeTextPipe } from './pipes/capitalText.pipe';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { MatStepperModule } from '@angular/material/stepper';
import { VerticalStepperComponent } from './vertical-stepper/vertical-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ResumeComponent,
    PlaneTemplateComponent,
    FormResumeComponent,
    TemplateComponent,
    TextColorDirective,
    fontColorDirective,
    capitalizeTextPipe,
    ViewResumeComponent,
    VerticalStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDividerModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
