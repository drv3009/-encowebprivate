import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFloorExcellenceComponent } from './shop-floor-excellence.component';

describe('ShopFloorExcellenceComponent', () => {
  let component: ShopFloorExcellenceComponent;
  let fixture: ComponentFixture<ShopFloorExcellenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFloorExcellenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFloorExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
