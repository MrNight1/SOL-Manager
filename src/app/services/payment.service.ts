import { Injectable } from '@angular/core';
import { DbserviceService } from './dbservice.service';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private db: DbserviceService) { }

  getPayments(): Observable<Payment[]> {
    return this.db.getAllItems('loans/FiTDc3Mhzoxwnync9mpA/payments');
  }
}
