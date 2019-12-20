import { Component, OnInit } from "@angular/core";
import { TweetsService } from "../tweets.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-twitter",
  templateUrl: "./twitter.component.html",
  styleUrls: ["./twitter.component.css"]
})
export class TwitterComponent implements OnInit {
  // chart = []; // This will hold our chart info
  // constructor(private _tweets: TweetsService) {}

  ngOnInit() {
    //   this._tweets.ptweet().subscribe((res: any) => {
    //     console.log(res);
    //   });
  }
}
