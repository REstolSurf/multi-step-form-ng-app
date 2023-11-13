import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'multi-step-form-ng-app';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      personalDetails: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(9)]]
      }),

      planDetails: this.fb.group({
        plan: ['arcade'],
        yearlyPlan: [false],
        cost: [9]
      }),

      addOnsDetails: this.fb.group({
        service: [false],
        serviceCost: [1],
        storage: [false],
        storageCost: [2],
        customization: [false],
        customizationCost: [2],
      })
    });

  }
}

