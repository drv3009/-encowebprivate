import { TestBed } from '@angular/core/testing';

import { CommonToAllService } from './common-to-all.service';

describe('CommonToAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonToAllService = TestBed.get(CommonToAllService);
    expect(service).toBeTruthy();
  });
});
