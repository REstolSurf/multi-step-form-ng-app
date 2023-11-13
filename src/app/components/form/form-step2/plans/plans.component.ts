import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Pricing } from 'src/app/classes/pricing';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  form!: FormGroup;
  yearlyIsChecked: boolean = false;
  discount: string = '2 months free';
  prices = new Pricing();
  

  arcadePrice: number;
  advancedPrice: number;
  proPrice: number;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.arcadePrice = this.prices.getMonthlyPrice('arcade');
    this.advancedPrice = this.prices.getMonthlyPrice('advanced');
    this.proPrice = this.prices.getMonthlyPrice('pro');
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;

    this.form.get('planDetails.yearlyPlan')?.valueChanges.subscribe((value) => {
      // Realizar acciones adicionales cuando cambia el valor de 'yearlyPlan'
      this.yearlyIsChecked = value;
    });
  }

  updatePrices() {
    if (this.yearlyIsChecked) {
      this.updatePlanCost(
        this.prices.getYearlyPrice(this.form.get('planDetails.plan')?.value)
      );

      this.arcadePrice = this.prices.getYearlyPrice('arcade');
      this.advancedPrice = this.prices.getYearlyPrice('advanced');
      this.proPrice = this.prices.getYearlyPrice('pro');
    } else {
      this.updatePlanCost(
        this.prices.getMonthlyPrice(this.form.get('planDetails.plan')?.value)
      );

      this.arcadePrice = this.prices.getMonthlyPrice('arcade');
      this.advancedPrice = this.prices.getMonthlyPrice('advanced');
      this.proPrice = this.prices.getMonthlyPrice('pro');
    }
  }

  updatePlanCost(cost: number) {
    this.form.get('planDetails')?.patchValue({ cost: cost });
  }
}
