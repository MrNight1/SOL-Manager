import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-owes-form',
  templateUrl: './owes-form.component.html',
  styleUrls: ['./owes-form.component.css']
})
export class OwesFormComponent implements OnInit {
  model = new Sale();

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.model.type = 'owes';
  }

  addOwe() {
    this.model.paidAmount = 0;
    this.model.status = 'ACTIVO';
    this.saleService.addSale(this.model);
  }

}
