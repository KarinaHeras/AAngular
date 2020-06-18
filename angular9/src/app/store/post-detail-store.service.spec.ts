import { TestBed } from '@angular/core/testing';

import { PostDetailStoreService } from './post-detail-store.service';

describe('PostDetailStoreService', () => {
  let service: PostDetailStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
