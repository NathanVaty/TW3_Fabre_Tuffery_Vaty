import { TestBed } from '@angular/core/testing';

import { InfoUtileService } from './info-utile.service';

describe('InfoUtileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoUtileService = TestBed.get(InfoUtileService);
    expect(service).toBeTruthy();
  });
});
