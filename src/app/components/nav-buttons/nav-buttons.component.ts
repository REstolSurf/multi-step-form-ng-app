import { Component, OnInit } from '@angular/core';
import { StepsCounterService } from 'src/app/services/steps-counter.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit{
currentStep$ : number = 1;

constructor(private stepCounterService : StepsCounterService){}

ngOnInit(){
  this.stepCounterService.currentStep$.subscribe((value)=> this.currentStep$ = value);
}

nextStep(){
  this.stepCounterService.updateStep(this.currentStep$ + 1);
}

prevStep(){
  this.stepCounterService.updateStep(this.currentStep$ - 1);

}
}
