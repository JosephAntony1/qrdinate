import { Component, OnInit } from '@angular/core';

import { BasicDetailsComponent } from '../basic-details/basic-details.component';
import { GuestsComponent } from '../guests/guests.component';
import { TransportationComponent } from '../transportation/transportation.component';
import { CheckInComponent } from '../check-in/check-in.component';
import { AdministriviaComponent } from '../administrivia/administrivia.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
