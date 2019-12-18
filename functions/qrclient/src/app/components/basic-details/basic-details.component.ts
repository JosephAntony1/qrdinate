import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

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


	ngOnInit() {
		this.detailsForm = new FormGroup({
			Location: new FormControl(),
			eventName: new FormControl(),
			hostName: new FormControl()
		});
	}
}
