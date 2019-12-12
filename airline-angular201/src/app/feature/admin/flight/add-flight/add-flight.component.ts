import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Flight } from 'src/app/shared/models/flight-model/flight.model';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  flightForm: FormGroup;
  flight: Flight;

  constructor() {}

  ngOnInit() {
    this.flightForm = new FormGroup({
      flightNumber: new FormControl(''),
      flightName: new FormControl(''),
      airlineCompany: new FormControl(''),
      noOfSeats: new FormControl(''),
      source: new FormControl(''),
      destination: new FormControl(''),
      ticketprice: new FormControl(''),
      sourceStartTime: new FormControl(''),
      destinationReachTime: new FormControl('')
    });
  }
}
