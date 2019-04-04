import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenssionsComponent } from './suspenssions.component';

describe('SuspenssionsComponent', () => {
  let component: SuspenssionsComponent;
  let fixture: ComponentFixture<SuspenssionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenssionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenssionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
