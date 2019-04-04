import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveStampingComponent } from './progressive-stamping.component';

describe('ProgressiveStampingComponent', () => {
  let component: ProgressiveStampingComponent;
  let fixture: ComponentFixture<ProgressiveStampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressiveStampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
