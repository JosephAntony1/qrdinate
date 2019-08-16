import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "event-info",
  templateUrl: "./event-info.component.html",
  styleUrls: ["./event-info.component.css"]
})
export class EventInfoComponent implements OnInit {
  eventId: string;
  date: string;
  hostName: string;
  location: string;
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params["id"];
      this.date = params["date"];
      this.hostName = params["hostName"];
      this.location = params["location"];
      this.title = params["title"];
    });
  }
}
