import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrbFormingComponent } from './prb-forming.component';

describe('PrbFormingComponent', () => {
  let component: PrbFormingComponent;
  let fixture: ComponentFixture<PrbFormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrbFormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrbFormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
