import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  customerImageArray = [
    "assets/img/cling-logo/1.jpg",
    "assets/img/cling-logo/2.jpg",
    "assets/img/cling-logo/3.jpg",
    "assets/img/cling-logo/4.jpg",
    "assets/img/cling-logo/5.jpg",
    "assets/img/cling-logo/6.png",
    "assets/img/cling-logo/7.png",
    "assets/img/cling-logo/8.png",
    "assets/img/cling-logo/9.png",
    "assets/img/cling-logo/10.jpeg",
    "assets/img/cling-logo/11.jpeg"
  ];

  ngOnInit() {}
}
