import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { PaymentService } from '../services/payment.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  model = new Payment();
  idSale: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.idSale = this.route.snapshot.paramMap.get('id');
    console.log('id: ', this.idSale);
  }

  addPay() {
    console.log('click');
    this.paymentService.addPay(this.idSale, this.model);
  }

}
