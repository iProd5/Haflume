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
import { TwitterComponent } from "./twitter/twitter.component";
import { HttpClientModule } from "@angular/common/http";
import { TweetsService } from "./tweets.service";
@NgModule({
  declarations: [
    AppComponent,
    RetweetComponent,
    HomepageComponent,
    PtweetComponent,
    TimelineComponent,
    AboutComponent,
    TwitterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, HttpClientModule],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
