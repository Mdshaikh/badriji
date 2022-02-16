import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutes } from './Payments.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PaymentsRoutes),
  ],
  declarations: [ PaymentsComponent]
})
export class PaymentsModule { }
