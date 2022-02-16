

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
 import { UsersRoutes } from './Users.routing';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,  MatCardModule,MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(UsersRoutes),
  ],
  declarations: [ UsersComponent]
})
export class UsersModule { }
