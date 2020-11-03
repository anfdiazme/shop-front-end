import { TestBed } from '@angular/core/testing';

import { shopService } from './shopservice';

describe('ShopService', () => {
  let service: shopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
