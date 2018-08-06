import { Injectable } from '@angular/core';
import { DbserviceService } from './dbservice.service';
import { Observable } from '../../../node_modules/rxjs';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private db: DbserviceService) { }

  getSales(): Observable<Sale[]> {
    let sales: Observable<Sale[]>;
    sales = this.db.getAllItems('sales');
    return sales;
  }

  addSale(sale: Sale) {
    this.db.addItem('sales', {
      amount: sale.amount,
      concept: sale.concept,
      date: sale.date,
      paidAmount: sale.paidAmount,
      quantity: sale.quantity,
      status: sale.status,
      who: sale.who
    });
  }
  setAsFinished(sale: Sale) {
    sale.status = 'FINALIZADA';
    this.db.updateItem('sales/' + sale.id , {
      status: sale.status
    });
  }
}
