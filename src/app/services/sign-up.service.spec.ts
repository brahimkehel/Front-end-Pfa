import { TestBed } from '@angular/core/testing';

import { Etuservice } from './Etu-service.service';

describe('SignUpService', () => {
  let service: Etuservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Etuservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
