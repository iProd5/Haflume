import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { RetweetComponent } from "./retweet/retweet.component";
import { PtweetComponent } from "./ptweet/ptweet.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "retweet", component: RetweetComponent },
  { path: "ptweet", component: PtweetComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
