import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportsService } from './reports.service';
import { Sales } from './sales.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reports-dashboard';

  salesData$: Observable<Sales[]>;

  totalSales$: Observable<number>;
  totalCashSale$: Observable<number>;
  totalCreditSale$: Observable<number>;
  mostSalesBuyer$: Observable<{ buyerName: string; saleTotal: number }>;

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    // Fetch sales data
    this.salesData$ = this.reportsService.getSalesData();

    // Initialize the observables for each report
    this.totalSales$ = this.reportsService.calculateTotalSales(this.salesData$);
    this.totalCashSale$ = this.reportsService.calculateTotalCashSale(this.salesData$);
    this.totalCreditSale$ = this.reportsService.calculateTotalCreditSale(this.salesData$);
    this.mostSalesBuyer$ = this.reportsService.calculateBuyerWithMostSale(this.salesData$);
  }
}