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
    this.getEventHandler(eventId);
  }

  addEventHandler(title, location, date, hostName, eventId) {
    console.log(
      this.eventService.addEvent(title, location, date, hostName, eventId)
    );
  }

  getEventHandler(id) {
    let info = this.eventService.getEvent(id);
    console.log("Info" + JSON.stringify(info));
    this.router.navigate(["/event-info", { eventInfo: info }]);
  }
}
