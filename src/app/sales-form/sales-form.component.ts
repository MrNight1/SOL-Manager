import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/sale';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {
  model = new Sale();

  constructor() { }

  ngOnInit() {
  }

}
