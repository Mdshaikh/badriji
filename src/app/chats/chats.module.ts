import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats.component';
import { ChatsRoutes } from './Chats.routing';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import {MatToolbarModule, MatSidenavModule,MatMenuModule,MatIconModule,
  MatListModule,MatCardModule,MatInputModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    ChartsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
  
    RouterModule.forChild(ChatsRoutes),
  ],
  declarations: [ ChatsComponent]
})
export class ChatsModule { }
