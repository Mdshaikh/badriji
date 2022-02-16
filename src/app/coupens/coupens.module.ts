import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoupensComponent } from './coupens.component';
import { CoupensRoutes } from './Coupens.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CoupensRoutes),
  ],
  declarations: [CoupensComponent]
})
export class CoupensModule { }