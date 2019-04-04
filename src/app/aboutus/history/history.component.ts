import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  constructor() {}

  imageArray = [
    "./assets/img/cerificates/certificate-1.jpg",
    "./assets/img/cerificates/certificate-2.jpg",
    "./assets/img/cerificates/certificate-3.jpg",
    "./assets/img/cerificates/certificate-4.jpg"
  ];

  ngOnInit() {}
}
