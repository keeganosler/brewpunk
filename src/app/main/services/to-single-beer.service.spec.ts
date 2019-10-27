import { TestBed } from '@angular/core/testing';

import { ToSingleBeerService } from './to-single-beer.service';

describe('ToSingleBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToSingleBeerService = TestBed.get(ToSingleBeerService);
    expect(service).toBeTruthy();
  });
});
