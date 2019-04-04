import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgProgramComponent } from './pg-program.component';

describe('PgProgramComponent', () => {
  let component: PgProgramComponent;
  let fixture: ComponentFixture<PgProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
