import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightListViewComponent } from './flight-list-view/flight-list-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [AddFlightComponent, FlightListViewComponent],
  exports: [AddFlightComponent]
})
export class FlightModule { }
