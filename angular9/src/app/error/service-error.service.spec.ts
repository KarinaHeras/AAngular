import { TestBed } from '@angular/core/testing';

import { ServiceErrorService } from './service-error.service';

describe('ServiceErrorService', () => {
  let service: ServiceErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
