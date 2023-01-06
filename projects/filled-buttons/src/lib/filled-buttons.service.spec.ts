import { TestBed } from '@angular/core/testing';

import { FilledButtonsService } from './filled-buttons.service';

describe('FilledButtonsService', () => {
  let service: FilledButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilledButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
