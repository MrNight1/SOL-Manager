import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Payment } from '../models/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Observable<Payment[]>;
  model: Payment;
  contador: number;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.getPayments();
    this.getTotalPagos();
  }

  getPayments(): void {
    this.payments = this.paymentService.getPayments();
  }

  getTotalPagos() {
    const total = this.payments.subscribe(
      res => {
        const x = res.map(t => t.amount).reduce((acc, value) => acc + value, 0);
        console.log('res.cantidad = ', res.map(t => t.amount));
        console.log('X = ', typeof(x));
        this.contador = x;
      }
    );
  }

}
