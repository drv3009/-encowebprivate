import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDevComponent } from './people-dev.component';

describe('PeopleDevComponent', () => {
  let component: PeopleDevComponent;
  let fixture: ComponentFixture<PeopleDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
