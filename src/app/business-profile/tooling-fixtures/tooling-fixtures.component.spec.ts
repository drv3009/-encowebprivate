import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolingFixturesComponent } from './tooling-fixtures.component';

describe('ToolingFixturesComponent', () => {
  let component: ToolingFixturesComponent;
  let fixture: ComponentFixture<ToolingFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolingFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolingFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
