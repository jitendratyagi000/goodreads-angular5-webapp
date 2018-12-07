import { TestBed, inject } from '@angular/core/testing';

import { GoodreadsService } from './goodreads.service';

describe('GoodreadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodreadsService]
    });
  });

  it('should be created', inject([GoodreadsService], (service: GoodreadsService) => {
    expect(service).toBeTruthy();
  }));
});
