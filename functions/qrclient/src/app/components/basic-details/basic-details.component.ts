import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'basic-details',
	templateUrl: './basic-details.component.html',
	styleUrls: ['./basic-details.component.css'],
	styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class BasicDetailsComponent implements OnInit {
	lat = 41.8781;
	lng = -87.6298;
	detailsForm: FormGroup;
	private loadComponent = true;
	loadMyChildComponent() {
		this.loadComponent = true;
	}


	ngOnInit() {
		this.detailsForm = new FormGroup({
			Location: new FormControl(),
			eventName: new FormControl(),
			hostName: new FormControl()
		});

		this.detailsDateForm = new FormGroup({
			eventDate: new FormControl(),
			startTime: new FormControl(),
			endTime: new FormControl(),
			lastDaySignUp: new FormControl()
		})
	}
}
