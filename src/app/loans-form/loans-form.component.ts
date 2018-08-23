import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-loans-form',
  templateUrl: './loans-form.component.html',
  styleUrls: ['./loans-form.component.css']
})
export class LoansFormComponent implements OnInit {
  model = new Sale();

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.model.type = 'loans';
  }

  addLoan() {
    this.model.paidAmount = 0;
    this.model.status = 'ACTIVO';
    this.saleService.addSale(this.model);
  }

}
