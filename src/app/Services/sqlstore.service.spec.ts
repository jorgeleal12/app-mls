import { TestBed } from '@angular/core/testing';

import { SqlstoreService } from './sqlstore.service';

describe('SqlstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlstoreService = TestBed.get(SqlstoreService);
    expect(service).toBeTruthy();
  });
});
