import { Component, OnInit } from '@angular/core';
import { StepsCounterService } from 'src/app/services/steps-counter.service';

@Component({
  selector: 'app-stepbar',
  templateUrl: './stepbar.component.html',
  styleUrls: ['./stepbar.component.scss']
})
export class StepbarComponent implements OnInit {
  currentStep$ : number = 1 ;

  steps: {position: number ; title : string;} [] = [
    {position: 1 , title: 'Your Info'},
    {position: 2 , title: 'Selected Plan'},
    {position: 3 , title: 'Add-Ons'},
    {position: 4 , title: 'Summary'}      
]

constructor(private stepsCounterService : StepsCounterService){
}

ngOnInit(){
  this.stepsCounterService.currentStep$.subscribe((value: number) => this.currentStep$ = value);
}


}
