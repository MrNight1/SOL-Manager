import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';
import { Observable } from '../../../node_modules/rxjs';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Observable<Sale[]>;
  model = new Sale();
  color = 'green';
  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.getSales();
  }

  getSales(): void {
    this.sales = this.saleService.getSales();
    this.sales.subscribe(
      result => {
        console.log('RESULT: ', result);
      }
    );
  }

}
