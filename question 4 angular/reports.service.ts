import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sales } from './sales.interface';
import salesData from '../assets/sales.json';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor() {}

  // Fetch sales data from the sales.json file    
  getSalesData(): Observable<Sales[]> {
    return of(salesData).pipe(map((data: any) => data.sales));
  }

  // Calculate total sales (sum of all saleTotal)
  calculateTotalSales(salesData: Observable<Sales[]>): Observable<number> {
    return salesData.pipe(
      map((sales) => sales.reduce((total, sale) => total + sale.saleTotal, 0))
    );
  }

  // Calculate total cash sales (sum of saleTotal where creditCard is false)
  calculateTotalCashSale(salesData: Observable<Sales[]>): Observable<number> {
    return salesData.pipe(
      map((sales) =>
        sales
          .filter((sale) => !sale.creditCard)
          .reduce((total, sale) => total + sale.saleTotal, 0)
      )
    );
  }

  // Calculate total credit card sales (sum of saleTotal where creditCard is true)
  calculateTotalCreditSale(salesData: Observable<Sales[]>): Observable<number> {
    return salesData.pipe(
      map((sales) =>
        sales
          .filter((sale) => sale.creditCard)
          .reduce((total, sale) => total + sale.saleTotal, 0)
      )
    );
  }

  // Calculate the buyer with the most sales (highest sum of saleTotal)
  calculateBuyerWithMostSale(
    salesData: Observable<Sales[]>
  ): Observable<{ buyerName: string; saleTotal: number }> {
    return salesData.pipe(
      map((sales) => {
        const buyerSales = sales.reduce((acc, sale) => {
          if (!acc[sale.buyerName]) {
            acc[sale.buyerName] = 0;
          }
          acc[sale.buyerName] += sale.saleTotal;
          return acc;
        }, {} as { [key: string]: number });

        const mostSalesBuyer = Object.entries(buyerSales).reduce(
          (max, [buyerName, saleTotal]) =>
            saleTotal > max.saleTotal ? { buyerName, saleTotal } : max,
          { buyerName: '', saleTotal: 0 }
        );

        return mostSalesBuyer;
      })
    );
  }
}
