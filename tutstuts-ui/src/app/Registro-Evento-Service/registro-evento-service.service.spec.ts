import { TestBed } from '@angular/core/testing';

import { RegistroEventoServiceService } from './registro-evento-service.service';

describe('RegistroEventoServiceService', () => {
  let service: RegistroEventoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroEventoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
