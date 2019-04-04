import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AedCoatingComponent } from './aed-coating.component';

describe('AedCoatingComponent', () => {
  let component: AedCoatingComponent;
  let fixture: ComponentFixture<AedCoatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AedCoatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AedCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
