import { TestBed } from '@angular/core/testing';

import { ManipDonneesService } from './manip-donnees.service';

describe('ManipDonneesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManipDonneesService = TestBed.get(ManipDonneesService);
    expect(service).toBeTruthy();
  });
});
