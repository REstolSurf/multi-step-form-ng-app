export class Pricing {
        private prices: { [key: string]: { monthly: number; yearly: number } } = {
          service: { monthly: 1, yearly: 10 },
          storage: { monthly: 2, yearly: 20 },
          customization: { monthly: 2, yearly: 20 },
          arcade: { monthly: 9, yearly: 90 },
          advanced: { monthly: 12, yearly: 120 },
          pro: { monthly: 15, yearly: 150 },
        };
      
        getMonthlyPrice(item: string): number {
          return this.prices[item].monthly;
        }
      
        getYearlyPrice(item: string): number {
          return this.prices[item].yearly;
        }
      
        // updateMonthlyPrice(item: string, newPrice: number): void {
        //   this.prices[item].monthly = newPrice;
        // }
      
        // updateYearlyPrice(item: string, newPrice: number): void {
        //   this.prices[item].yearly = newPrice;
        // }
      }