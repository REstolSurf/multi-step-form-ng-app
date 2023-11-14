import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalCostService {

calculateTotalCost(planCost: number, serviceCost : number, storageCost: number, customizationCost: number){
  
 return planCost+serviceCost+storageCost+customizationCost;
}

}
