import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: "event-info",
  templateUrl: "./event-info.component.html",
  styleUrls: ["./event-info.component.css"]
})
export class EventInfoComponent implements OnInit {
  private eventId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params["eventId"]; 

    });
  }
}
