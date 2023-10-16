import { TestBed } from '@angular/core/testing';

import { IngurService } from './ingur.service';

describe('IngurService', () => {
  let service: IngurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
