import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "ngx-landing-body",
  styleUrls: ["./landing-body.component.scss"],
  templateUrl: "./landing-body.component.html",
})
export class LandingBodyComponent implements OnDestroy {
  private alive = true;

  constructor() {}
  ngOnDestroy(): void {
    this.alive = false;
  }
}
