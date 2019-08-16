import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EventService {
  //uri = "http://localhost:5000";
  uri = "https://qrdinate.firebaseapp.com";
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

  getEvent(id) {
    let params = new HttpParams().set("id", id);

    return this.http
      .get(`${this.uri}/event-info/`, { params: params })
      .subscribe(res => {
        res["id"] = id;
        console.log(res);
        return res;
      });
  }
}
