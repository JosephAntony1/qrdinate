import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../../event.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  submitEventID(eventId: string) {
    this.addEventHandler("hello", "yes", "this", "isdog", eventId);
    this.router.navigate(["/event-info", { eventId: eventId }]);
  }

  addEventHandler(title, location, date, hostName, eventId) {
    console.log(this.eventService.addEvent(title, location, date, hostName, eventId));
  }
}
