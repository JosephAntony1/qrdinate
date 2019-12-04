import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
	{ path: "home", component: HomepageComponent },
	{ path: "event-info", component: EventInfoComponent },
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "create-event", component: CreateEventComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
