import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent implements OnInit {
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
    { data: [65, 59, 80, 81, 56, 55, 4], label: "comments" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "likes" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "share" }
  ];
  // ends
  constructor() {}

  ngOnInit() {}
}
