import { TestBed } from '@angular/core/testing';

import { EventopageService } from './eventopage.service';

describe('EventopageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventopageService = TestBed.get(EventopageService);
    expect(service).toBeTruthy();
  });
});
