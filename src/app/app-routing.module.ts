import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { SalesComponent } from './sales/sales.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { OwesFormComponent } from './owes-form/owes-form.component';
import { OwesComponent } from './owes/owes.component';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: 'sales', component: SalesComponent},
  { path: 'payments/:tipo/:id', component: PaymentFormComponent },
  { path: 'new', component: SalesFormComponent },
  { path: 'newOwe', component: OwesFormComponent },
  { path: 'owes', component: OwesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
