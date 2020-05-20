import { TestBed } from '@angular/core/testing';

import { SeanceAffectationService } from './seance-affectation.service';

describe('SeanceAffectationService', () => {
  let service: SeanceAffectationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeanceAffectationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
