import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutes } from './Orders.routing';
import { RouterModule } from '@angular/router';
import {MatExpansionModule,MatCardModule,MatIconModule} from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    PerfectScrollbarModule,
    MatIconModule,
    RouterModule.forChild(OrdersRoutes),
  ],
  declarations: [ OrdersComponent]
})
export class OrdersModule { }
