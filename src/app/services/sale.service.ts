import { Injectable } from '@angular/core';
import { DbserviceService } from './dbservice.service';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private db: DbserviceService) { }

  getSales(model: Sale): Observable<Sale[]> {
    let sales: Observable<Sale[]>;
    sales = this.db.getAllItems(model.type);
    return sales;
  }

  addSale(sale: Sale) {
    this.db.addItem(sale.type, {
      amount: +sale.amount,
      concept: sale.concept,
      date: sale.date,
      paidAmount: +sale.paidAmount,
      quantity: +sale.quantity,
      status: sale.status,
      who: sale.who
    });
  }
  setAsFinished(sale: Sale) {
    sale.status = 'FINALIZADA';
    this.db.updateItem(sale.type + '/' + sale.id , {
      status: sale.status
    });
  }
}
