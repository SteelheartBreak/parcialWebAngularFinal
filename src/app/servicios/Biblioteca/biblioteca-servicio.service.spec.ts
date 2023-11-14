import { TestBed } from '@angular/core/testing';

import { BibliotecaServicioService } from './biblioteca-servicio.service';

describe('BibliotecaServicioService', () => {
  let service: BibliotecaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
