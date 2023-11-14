import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Pricing } from 'src/app/classes/pricing';
@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent implements OnInit {
  form!: FormGroup;
  yearlyIsChecked: boolean = false;
  prices = new Pricing;
 

  servicePrice: number;
  storagePrice: number;
  customizationPrice: number;

  constructor(private rootFormGroup: FormGroupDirective ) {
    this.servicePrice = this.prices.getMonthlyPrice('service');
    this.storagePrice = this.prices.getMonthlyPrice('storage');
    this.customizationPrice = this.prices.getMonthlyPrice('customization');
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control as FormGroup;
    this.yearlyIsChecked = this.form.get('planDetails.yearlyPlan')?.value;
    this.updateAddOnsPrices(this.yearlyIsChecked);
    
    this.form.get('planDetails.yearlyPlan')?.valueChanges.subscribe(value => {
      // Realizar acciones adicionales cuando cambia el valor de 'yearlyPlan'
      this.updateAddOnsPrices(value);
    });
    

  }

  updateAddOnsPrices(isYearlyChecked: boolean) {
      if (isYearlyChecked) {
        this.servicePrice = this.prices.getYearlyPrice('service');
        this.storagePrice = this.prices.getYearlyPrice('storage');
        this.customizationPrice = this.prices.getYearlyPrice('customization');
      } else {
        this.servicePrice = this.prices.getMonthlyPrice('service');
        this.storagePrice = this.prices.getMonthlyPrice('storage');
        this.customizationPrice = this.prices.getMonthlyPrice('customization');
      }
    this.form.get('addOnsDetails')?.patchValue({ serviceCost: this.servicePrice , storageCost: this.storagePrice ,customizationCost: this.customizationPrice });
  }

}
