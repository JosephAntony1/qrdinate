import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import Homepage from "./hompage/compage.component";
import EventInfo from "./event-info/event-info.component";
const routes: Routes = [{ path: "home", component: Homepage},  {path: 'event-info' , component: EventInfo} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
