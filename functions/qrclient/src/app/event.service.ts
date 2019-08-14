import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EventService {
  //uri = "http://localhost:5000";
  uri = "https://qrdinate.firebaseio.com/";
  constructor(private http: HttpClient) {}

  addEvent(title, location, date, hostName, id) {
    let event = {
      id: id,
      details: {
        title: title,
        location: location,
        date: date,
        hostName: hostName
      }
    };
    return this.http
      .post(`${this.uri}/event/add`, event, { responseType: "blob" })
      .subscribe(res => {
        console.log(res);
      });
  }
}
