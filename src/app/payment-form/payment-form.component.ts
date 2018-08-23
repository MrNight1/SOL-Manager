import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { PaymentService } from '../services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  model = new Payment();
  idSale: string;
  tipo: string;
  colorTool: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.idSale = this.route.snapshot.paramMap.get('id');
    this.tipo   = this.route.snapshot.paramMap.get('tipo');
    switch (this.tipo) {
      case 'sales':
        this.colorTool = 'primary';
        break;
      case 'owes' :
        this.colorTool = 'warn';
        break;
      case 'loans':
        this.colorTool = 'accent';
        break;
    }
    console.log('id: ', this.idSale);
    console.log('id: ', this.tipo);
  }

  addPay() {
    console.log('click');
    this.paymentService.addPay(this.tipo, this.idSale, this.model);
  }

}
