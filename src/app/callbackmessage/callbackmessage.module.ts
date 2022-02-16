import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackmessageComponent } from './callbackmessage.component';
import { CallbackmessageRoutes } from './Callbackmessage.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CallbackmessageRoutes),
  ],
  declarations: [CallbackmessageComponent]
})
export class CallbackmessageModule { }