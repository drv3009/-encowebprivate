import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UhtStampingComponent } from './uht-stamping.component';

describe('UhtStampingComponent', () => {
  let component: UhtStampingComponent;
  let fixture: ComponentFixture<UhtStampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UhtStampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UhtStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
