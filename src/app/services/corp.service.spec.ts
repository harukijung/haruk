import { TestBed, inject } from '@angular/core/testing';

import { CorpService } from './corp.service';

describe('CorpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorpService]
    });
  });

  it('should be created', inject([CorpService], (service: CorpService) => {
    expect(service).toBeTruthy();
  }));
});
