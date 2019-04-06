import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public headerElements: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("configured routes: ", this.router.config);
    this._SetHeaderElements(this.router.config);
  }

  private _SetHeaderElements(_Routes) {
    let currIndex = 0;
    _Routes.forEach(element => {
      if (element.path != "" && element.path != "**") {
        this.headerElements.push({
          url: element.path,
          title: element.data.title.toUpperCase()
        });
        this.headerElements[currIndex].children = [];
        if (element.children && element.children.length > 0) {
          element.children.forEach(childElem => {
            if (childElem.path != "" && childElem.path != "**") {
              this.headerElements[currIndex].children.push({
                url: childElem.path,
                title: childElem.data.title.toUpperCase()
              });
            }
          });
        }
        currIndex++;
      }
      //this.headerElements.push(  )
    });
    console.log(this.headerElements);
  }
}
