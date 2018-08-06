import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  model = new Payment();

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }

  addPay() {
    this.paymentService.addPay('7BBkZ9DiTol2yRyPnQGN', this.model);
  }

}
