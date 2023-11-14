import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsCounterService {
private currentStepToSubject : BehaviorSubject<number> = new BehaviorSubject<number>(1);

currentStep$ : Observable<number> = this.currentStepToSubject.asObservable();

  constructor() { }

  updateStep(value: number){
    this.currentStepToSubject.next(value);
  }


}
