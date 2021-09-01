import { TestBed } from '@angular/core/testing';

import { ConnectionAPIService } from './connection-api.service';

describe('ConnectionAPIService', () => {
  let service: ConnectionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
