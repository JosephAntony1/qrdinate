import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { EventInfoComponent } from './event-info/event-info.component';

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "event-info", component: EventInfoComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
