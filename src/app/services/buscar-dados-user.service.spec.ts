import { TestBed } from '@angular/core/testing';

import { BuscarDadosUserService } from './buscar-dados-user.service';

describe('BuscarDadosUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarDadosUserService = TestBed.get(BuscarDadosUserService);
    expect(service).toBeTruthy();
  });
});
