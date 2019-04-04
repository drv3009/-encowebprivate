import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnDComponent } from './rn-d.component';

describe('RnDComponent', () => {
  let component: RnDComponent;
  let fixture: ComponentFixture<RnDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
