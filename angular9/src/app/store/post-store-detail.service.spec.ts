import { TestBed } from '@angular/core/testing';

import { PostStoreDetailService } from './post-store-detail.service';

describe('PostStoreDetailService', () => {
  let service: PostStoreDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostStoreDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
