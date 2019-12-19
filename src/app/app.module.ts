import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RetweetComponent } from "./retweet/retweet.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PtweetComponent } from "./ptweet/ptweet.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    RetweetComponent,
    HomepageComponent,
    PtweetComponent,
    TimelineComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
