import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PersonalDetailsComponent } from './components/form/form-step1/personal-details/personal-details.component';
import { PlansComponent } from './components/form/form-step2/plans/plans.component';
import { AddOnsComponent } from './components/form/form-step3/add-ons/add-ons.component';
import { SummaryComponent } from './components/form/form-step4/summary/summary.component';
import { StepbarComponent } from './components/stepsbar/stepbar.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToPriceStringPipe } from './pipes/to-price-string.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmComponent } from './components/form/form-step5/confirm/confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    PlansComponent,
    AddOnsComponent,
    SummaryComponent,
    StepbarComponent,
    NavButtonsComponent,
    ToPriceStringPipe,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
