import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  AfterViewInit
} from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public headerElements = [];
  public childElements = {};

  @ViewChild("ABOUTUS") ABOUTUS: ElementRef;
  @ViewChild("TECHNOLOGY") TECHNOLOGY: ElementRef;
  @ViewChild("CAREERS") CAREERS: ElementRef;
  @ViewChild("BUSINESSPROFILE") BUSINESSPROFILE: ElementRef;

  viewObjects = {
    ABOUTUS: this.ABOUTUS,
    TECHNOLOGY: this.TECHNOLOGY,
    CAREERS: this.CAREERS,
    BUSINESSPROFILE: this.BUSINESSPROFILE
  };

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("configured routes: ", this.router.config);
  }

  ngAfterViewInit() {
    console.log(this.ABOUTUS);
    this._SetHeaderElements(this.router.config);
    this._SetHeaderElements(this.router.config);
    console.log(this.ABOUTUS);

    // setInterval(() => {
    //   this._SetHeaderElements(this.router.config);
    // }, 1000);
  }

  private _SetHeaderElements(_Routes) {
    let parentIndex = 0;
    _Routes.forEach(element => {
      let childIndex = 0;
      if (element.path != "" && element.path != "**") {
        let title = element.data.title.toUpperCase();
        let url = element.path;
        let subMenuRefKey = element.data.title.replace(" ", "").toUpperCase();
        let subMenuRef = this.viewObjects[subMenuRefKey];
        this.headerElements[parentIndex] = { title, url, subMenuRef };
        if (element.children) {
          this.childElements[subMenuRefKey] = [];
          element.children.map(childElem => {
            if (childElem.data) {
              let title = childElem.data.title.toUpperCase();
              let url = childElem.path;
              this.childElements[subMenuRefKey][childIndex] = {
                title,
                url
              };
              childIndex++;
            }
          });
        }
        parentIndex++;
      }
    });
    console.log(this.headerElements);
    console.log(this.childElements);
  }
}
