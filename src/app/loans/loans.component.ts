import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Observable<Sale[]>;
  model = new Sale();
  color = 'green';

  constructor(private oweService: SaleService) { }

  ngOnInit() {
    this.model.type = 'loans';
    this.getLoans();
  }

  getLoans(): void {
    this.loans = this.oweService.getSales(this.model);
    this.loans.subscribe(
      result => {
        console.log('RESULT: ', result);
      }
    );
  }

  setAsFinished(loan: Sale) {
    loan.type = 'loans';
    console.log('Marcar como pagada! ', loan.id);
    this.oweService.setAsFinished(loan);
  }

}
