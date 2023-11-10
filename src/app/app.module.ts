import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormGroupComponent } from './components/form/form-group.component';
import { PersonalDetailsComponent } from './components/form/form-step1/personal-details/personal-details.component';
import { PlansComponent } from './components/form/form-step2/plans/plans.component';
import { AddOnsComponent } from './components/form/form-step3/add-ons/add-ons.component';
import { SummaryComponent } from './components/form/form-step4/summary/summary.component';
import { StepbarComponent } from './components/stepsbar/stepbar.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    PersonalDetailsComponent,
    PlansComponent,
    AddOnsComponent,
    SummaryComponent,
    StepbarComponent,
    NavButtonsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
