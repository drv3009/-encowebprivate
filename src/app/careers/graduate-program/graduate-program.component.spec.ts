import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateProgramComponent } from './graduate-program.component';

describe('GraduateProgramComponent', () => {
  let component: GraduateProgramComponent;
  let fixture: ComponentFixture<GraduateProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduateProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
