import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @Input() idSale: string;
  @Input() tipo: string;

  payments: Observable<Payment[]>;
  model: Payment;
  contador: number;

  constructor(
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.getPayments(this.tipo, this.idSale);
    this.getTotalPagos();
  }

  getPayments(tipo: string, idSale: string): void {
    this.payments = this.paymentService.getPayments(tipo, idSale);
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
