import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';
import { Observable } from 'rxjs';
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
    this.model.type = 'sales';
    this.getSales();
  }

  getSales(): void {
    this.sales = this.saleService.getSales(this.model);
    this.sales.subscribe(
      result => {

        result.forEach(element => {
          if (element.status === 'FINALIZADA') {
            console.log('color verde');
            element.color = 'blue';
          } else {
            console.log('color blue');
            element.color = '';
          }
        });
        console.log('RESULT: ', result);
      }
    );
  }

  setAsFinished(sale: Sale) {
    sale.type = 'sales';
    console.log('Marcar como pagada! ', sale.id);
    this.saleService.setAsFinished(sale);
  }

}
