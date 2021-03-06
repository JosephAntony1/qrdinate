import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { EventInfoComponent } from "./components/event-info/event-info.component";

import { EventService } from "./event.service";

import { CreateEventComponent } from "./components/create-event/create-event.component";

import { BasicDetailsComponent } from "./components/basic-details/basic-details.component";
import { GuestsComponent } from "./components/guests/guests.component";
import { TransportationComponent } from "./components/transportation/transportation.component";
import { CheckInComponent } from "./components/check-in/check-in.component";
import { AdministriviaComponent } from "./components/administrivia/administrivia.component";
import { ReviewComponent } from "./components/review/review.component";
import { CreateEventSidebarComponent } from './components/create-event-sidebar/create-event-sidebar.component';

import { AgmCoreModule } from '@agm/core';
import config from '../assets/config.json';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		EventInfoComponent,
		CreateEventComponent,
		BasicDetailsComponent,
		GuestsComponent,
		TransportationComponent,
		CheckInComponent,
		AdministriviaComponent,
		ReviewComponent,
		CreateEventSidebarComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule,
		AgmCoreModule.forRoot({
			apiKey: config.GMAPS_API
		}),
		FormsModule,
		ReactiveFormsModule,

	],
	providers: [EventService],
	bootstrap: [AppComponent]
})
export class AppModule { }
