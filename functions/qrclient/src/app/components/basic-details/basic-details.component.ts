import { Component, OnInit } from '@angular/core';

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
	lat = 51.678418;
	lng = 7.809007;

  ngOnInit(){}
}
