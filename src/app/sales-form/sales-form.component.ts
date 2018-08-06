import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {
  model = new Sale();

  constructor(private saleService: SaleService) { }

  ngOnInit() {
  }

  addSale() {
    this.model.paidAmount = 0;
    this.model.status = 'ACTIVO';
    this.saleService.addSale(this.model);
  }

}
