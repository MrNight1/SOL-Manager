import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { SalesComponent } from './sales/sales.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { OwesFormComponent } from './owes-form/owes-form.component';
import { OwesComponent } from './owes/owes.component';
import { LoansFormComponent } from './loans-form/loans-form.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { canActivate: [AuthGuard], path: 'sales',   component: SalesComponent     },
  { canActivate: [AuthGuard], path: 'new',     component: SalesFormComponent },
  { canActivate: [AuthGuard], path: 'newOwe',  component: OwesFormComponent  },
  { canActivate: [AuthGuard], path: 'owes',    component: OwesComponent      },
  { canActivate: [AuthGuard], path: 'newLoan', component: LoansFormComponent },
  { canActivate: [AuthGuard], path: 'loans',   component: LoansComponent     },
  { canActivate: [AuthGuard], path: 'payments/:tipo/:id', component: PaymentFormComponent },
  { path: 'login',   component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
