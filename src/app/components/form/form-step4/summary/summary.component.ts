import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { StepsCounterService } from 'src/app/services/steps-counter.service';
import { TotalCostService } from 'src/app/services/total-cost.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  form!: FormGroup;
  serviceCost: number = 0;
  storageCost: number = 0;
  customizationCost: number = 0;
  planCost: number = 0;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private totalCostService: TotalCostService,
    private stepsCounterService : StepsCounterService
  ) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;

    this.planCost = this.form.get('planDetails.cost')?.value;

    this.updateAddOnsValues();

    
    this.form.get('planDetails.cost')?.valueChanges.subscribe((value) => {
      this.planCost = value;
      this.updateTotalCost();
    });

    this.form.get('addOnsDetails.service')?.valueChanges.subscribe((value) => {
      value
        ? (this.serviceCost = this.form.get('addOnsDetails.serviceCost')?.value)
        : (this.serviceCost = 0);
      this.updateTotalCost();
    });

    this.form.get('addOnsDetails.storage')?.valueChanges.subscribe((value) => {
      value
        ? (this.storageCost = this.form.get('addOnsDetails.storageCost')?.value)
        : (this.storageCost = 0);
      this.updateTotalCost();
    });

    this.form
      .get('addOnsDetails.customization')
      ?.valueChanges.subscribe((value) => {
        value
          ? (this.customizationCost = this.form.get(
              'addOnsDetails.customizationCost'
            )?.value)
          : (this.customizationCost = 0);
        this.updateTotalCost();
      });

      this.form.get('planDetails.yearlyPlan')?.valueChanges.subscribe(() =>this.updateAddOnsValues())
  }

  updateTotalCost() {
    const totalCost = this.totalCostService.calculateTotalCost(
      this.planCost,
      this.serviceCost,
      this.storageCost,
      this.customizationCost
    );
    this.form.patchValue({ totalCost: totalCost });
  }

  updateAddOnsValues(){
    this.form.get('addOnsDetails.service')?.value
    ? (this.serviceCost = this.form.get('addOnsDetails.serviceCost')?.value)
    : (this.serviceCost = 0);

  this.form.get('addOnsDetails.storage')?.value
    ? (this.storageCost = this.form.get('addOnsDetails.storageCost')?.value)
    : (this.storageCost = 0);

  this.form.get('addOnsDetails.customization')?.value
    ? (this.customizationCost = this.form.get(
        'addOnsDetails.customizationCost'
      )?.value)
    : (this.customizationCost = 0);

    this.updateTotalCost();

  }

  goToPlans(){
this.stepsCounterService.updateStep(2);
  }
  
}
