import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { PassengerListViewComponent } from './passenger-list-view/passenger-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    PassengerRoutingModule
  ],
  declarations: [AddPassengerComponent, PassengerListViewComponent]
})
export class PassengerModule { }
