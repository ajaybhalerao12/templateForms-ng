import { TestBed } from '@angular/core/testing';

import { InMemoryContactsApi } from './in-memory-contacts.service';

describe('InMemoryContactsService', () => {
  let service: InMemoryContactsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryContactsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
