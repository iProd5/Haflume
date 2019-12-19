import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-retweet",
  templateUrl: "./retweet.component.html",
  styleUrls: ["./retweet.component.css"]
})
export class RetweetComponent implements OnInit {
  // adding
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 48], label: "retweets" }
    // { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];
  // ends

  constructor() {}

  ngOnInit() {}
}
