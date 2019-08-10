import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router"
@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  submitEventID(eventId: string) {
    console.log(eventId);
    this.router.navigate(["/event-info", { eventId: eventId }]);
  }
}
