import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrWeldingComponent } from './msr-welding.component';

describe('MsrWeldingComponent', () => {
  let component: MsrWeldingComponent;
  let fixture: ComponentFixture<MsrWeldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrWeldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrWeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
