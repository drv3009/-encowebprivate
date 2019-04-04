import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaCaeComponent } from './fea-cae.component';

describe('FeaCaeComponent', () => {
  let component: FeaCaeComponent;
  let fixture: ComponentFixture<FeaCaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaCaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaCaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
