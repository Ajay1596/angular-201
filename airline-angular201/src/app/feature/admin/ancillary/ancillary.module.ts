import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AncillaryRoutingModule } from './ancillary-routing.module';
import { AncillaryServiceComponent } from './ancillary-service/ancillary-service.component';

@NgModule({
  imports: [
    CommonModule,
    AncillaryRoutingModule
  ],
  declarations: [ AncillaryServiceComponent]
})
export class AncillaryModule { }
