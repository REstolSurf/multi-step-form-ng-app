import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  form!: FormGroup;
  yearlyIsChecked: boolean = false;
  discount: string = '2 months free';

  arcade = { monthlyPrice: 9, yearlyPrice: 90 };
  advanced = { monthlyPrice: 12, yearlyPrice: 120 };
  pro = { monthlyPrice: 15, yearlyPrice: 150 };

  arcadePrice: number= this.arcade.monthlyPrice;
  advancedPrice: number = this.advanced.monthlyPrice;
  proPrice: number = this.pro.monthlyPrice;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;
  }

  sliderChanged() {
    this.yearlyIsChecked = !this.yearlyIsChecked;
    if (this.yearlyIsChecked) {
      this.arcadePrice = this.arcade.yearlyPrice;
      this.advancedPrice = this.advanced.yearlyPrice;
      this.proPrice = this.pro.yearlyPrice;
    } else {
      this.arcadePrice = this.arcade.monthlyPrice;
      this.advancedPrice = this.advanced.monthlyPrice;
      this.proPrice = this.pro.monthlyPrice;
    }
  }

  updatePlanCost(cost: number){
    this.form.get('planDetails')?.patchValue({ cost: cost });
  }
}
