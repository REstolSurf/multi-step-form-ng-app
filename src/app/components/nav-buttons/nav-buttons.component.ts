import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { StepsCounterService } from 'src/app/services/steps-counter.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit{
currentStep$ : number = 1;
form! : FormGroup;

constructor(private stepCounterService : StepsCounterService , private rootFormGroup : FormGroupDirective){
}

ngOnInit(): void{
  this.form = this.rootFormGroup.control as FormGroup;

  this.stepCounterService.currentStep$.subscribe((value)=> this.currentStep$ = value);
}

nextStep(){
  this.stepCounterService.updateStep(this.currentStep$ + 1);
}

prevStep(){
  this.stepCounterService.updateStep(this.currentStep$ - 1);

}

get isFormValid(): boolean {return this.form.valid};

}
