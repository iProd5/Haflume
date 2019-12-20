import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  constructor(private _http: HttpClient) {}
  // ptweet() {
  //   return this._http
  //     .get(
  //       "  ")
  //     .map((result: any) => result);
  // }
}
