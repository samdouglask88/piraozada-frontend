import { TestBed } from '@angular/core/testing';

import { Resumo } from './resumo';

describe('Resumo', () => {
  let service: Resumo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resumo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
