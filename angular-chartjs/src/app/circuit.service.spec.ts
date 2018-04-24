import { TestBed, inject } from '@angular/core/testing';

import { CircuitService } from './circuit.service';

describe('CircuitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircuitService]
    });
  });

  it('should be created', inject([CircuitService], (service: CircuitService) => {
    expect(service).toBeTruthy();
  }));
});
