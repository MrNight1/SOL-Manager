import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private paymentService: PaymentService) { }

  ngOnInit() {
    const idSale = this.route.snapshot.paramMap.get('id');
    console.log('id: ', idSale);
    this.getPayments(idSale);
    this.getTotalPagos();
  }

  getPayments(idSale: string): void {
    this.payments = this.paymentService.getPayments(idSale);
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
