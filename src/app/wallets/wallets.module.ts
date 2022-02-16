import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsComponent } from './wallets.component';
import { WalletsRoutes } from './Wallets.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WalletsRoutes),
  ],
  declarations: [ WalletsComponent]
})
export class WalletsModule { }
