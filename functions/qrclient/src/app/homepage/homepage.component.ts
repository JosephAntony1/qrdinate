import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {
    $(document).ready(function() {
      $(".parallax").parallax();
    });
  }

  ngOnInit() {}

  submitEventID(eventId: string) {
    this.router.navigate(["/event-info", { eventId: eventId }]);
  }
}
