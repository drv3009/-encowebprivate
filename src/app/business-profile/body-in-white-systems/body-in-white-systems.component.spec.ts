import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyInWhiteSystemsComponent } from "./body-in-white-systems.component";

describe("BodyInWhiteSystemsComponent", () => {
  let component: BodyInWhiteSystemsComponent;
  let fixture: ComponentFixture<BodyInWhiteSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyInWhiteSystemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyInWhiteSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
