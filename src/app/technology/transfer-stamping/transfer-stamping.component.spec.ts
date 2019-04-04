import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStampingComponent } from './transfer-stamping.component';

describe('TransferStampingComponent', () => {
  let component: TransferStampingComponent;
  let fixture: ComponentFixture<TransferStampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferStampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
