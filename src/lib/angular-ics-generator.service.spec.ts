import { TestBed } from '@angular/core/testing';

import { AngularIcsGeneratorService } from './angular-ics-generator.service';

describe('AngularIcsGeneratorService', () => {
  let service: AngularIcsGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularIcsGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
