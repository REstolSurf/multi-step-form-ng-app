import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPriceString'
})
export class ToPriceStringPipe implements PipeTransform {

  transform(price: number, yearlyIsChecked: boolean): string {
    return (yearlyIsChecked) ? `$${price}/yr` : `$${price}/mo`;
  }

}
