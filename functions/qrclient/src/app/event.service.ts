import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EventService {
  uri = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  addEvent(title, location, date, hostName, id) {
    let event = {
      title: title,
      location: location,
      date: date,
      hostName: hostName,
      id: id
    };
    return this.http.post(`${this.uri}/event/add`, event).subscribe(() => {});
  }
}
