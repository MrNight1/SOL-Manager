import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Sale } from '../models/sale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-owes',
  templateUrl: './owes.component.html',
  styleUrls: ['./owes.component.css']
})

export class OwesComponent implements OnInit {
  owes: Observable<Sale[]>;
  model = new Sale();
  color = 'green';
  constructor(private oweService: SaleService) { }

  ngOnInit() {
    this.model.type = 'owes';
    this.getOwes();
  }

  getOwes(): void {
    this.owes = this.oweService.getSales(this.model);
    this.owes.subscribe(
      result => {
        console.log('RESULT: ', result);
      }
    );
  }

  setAsFinished(owe: Sale) {
    owe.type = 'owes';
    console.log('Marcar como pagada! ', owe.id);
    this.oweService.setAsFinished(owe);
  }

}
