import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
  selector: "[html-Capitalise]"
})
export class CapitaliseDirective {
  constructor(el: ElementRef) {
    el.nativeElement.innerhtml = el.nativeElement.innerhtml.toUpperCase();
  }
}
