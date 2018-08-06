import { Injectable } from '@angular/core';
import { DbserviceService } from './dbservice.service';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private db: DbserviceService) { }

  getPayments(idSale: string): Observable<Payment[]> {
    return this.db.getAllItems('sales/' + idSale + '/payments');
  }

  addPay(idSale: string, payment: Payment) {
    this.db.addItem('sales/' + idSale + '/payments', {
      amount: +payment.amount,
      date: payment.date,
      desc: payment.desc,
      who: payment.who
    });
  }
}
