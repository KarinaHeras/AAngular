import { TestBed } from '@angular/core/testing';

import { BackofficeProsyService } from './backoffice-prosy.service';

describe('BackofficeProsyService', () => {
  let service: BackofficeProsyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackofficeProsyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
