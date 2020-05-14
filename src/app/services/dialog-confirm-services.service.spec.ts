import { TestBed } from '@angular/core/testing';

import { DialogConfirmServicesService } from './dialog-confirm-services.service';

describe('DialogConfirmServicesService', () => {
  let service: DialogConfirmServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogConfirmServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
