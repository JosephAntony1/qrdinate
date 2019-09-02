import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "create-event-sidebar",
  templateUrl: "./create-event-sidebar.component.html",
  styleUrls: ["./create-event-sidebar.component.css"]
})
export class CreateEventSidebarComponent implements OnInit {
  @Output() tab = new EventEmitter();

  id = 0;
  constructor() {}

  ngOnInit() {}

  setTabID(id) {
    this.id = id;
    this.tab.emit(id);
  }

  getTabID(id) {
    return id === this.id;
  }
}
