import { Injectable } from '@angular/core';
import { DbserviceService } from './dbservice.service';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private db: DbserviceService, private dbBatch: AngularFirestore) { }

  getPayments(idSale: string): Observable<Payment[]> {
    return this.db.getAllItems('sales/' + idSale + '/payments');
  }

  addPay(idSale: string, payment: Payment) {
    const test = this.dbBatch.firestore.batch();
    const saleDoc = this.dbBatch.doc('sales/' + idSale);
    console.log('Type: ', typeof(saleDoc));
    // test.update(saleDoc., { paidAmount: +payment.amount });
    /*this.db.addItem('sales/' + idSale + '/payments', {
      amount: +payment.amount,
      date: payment.date,
      desc: payment.desc,
      who: payment.who
    });*/
  }
}
