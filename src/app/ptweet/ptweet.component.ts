import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ptweet",
  templateUrl: "./ptweet.component.html",
  styleUrls: ["./ptweet.component.css"]
})
export class PtweetComponent implements OnInit {
  // adding
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: "Prolific Tweeters",
      fontSize: 25
    }
  };
  public barChartLabels = [
    "kwadw1",
    "phoenix43",
    "annetR5",
    "frank Tee",
    "Micheall",
    "anesty",
    "tasha",
    "abeiku",
    "Daina89",
    "jonesr10",
    "jonas",
    "adamsHits"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 4, 32, 42, 23, 36, 57], label: "tweets" }
    // { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];
  // ends
  constructor() {}

  ngOnInit() {}
}
