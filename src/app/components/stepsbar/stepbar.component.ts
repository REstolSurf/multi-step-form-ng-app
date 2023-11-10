import { Component } from '@angular/core';

@Component({
  selector: 'app-stepbar',
  templateUrl: './stepbar.component.html',
  styleUrls: ['./stepbar.component.scss']
})
export class StepbarComponent {
  currentStep$ : number = 1;

  steps: {position: number ; title : string;} [] = [
    {position: 1 , title: 'Your Info'},
    {position: 2 , title: 'Selected Plan'},
    {position: 3 , title: 'Add-Ons'},
    {position: 4 , title: 'Summary'}
]

}
