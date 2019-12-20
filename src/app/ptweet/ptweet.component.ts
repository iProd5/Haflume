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
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
    "user11",
    "user12"
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
