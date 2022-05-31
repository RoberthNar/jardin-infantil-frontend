import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { environment } from './../../../../../environments/environment';
import { Pension } from './../model/pension';
import { PensionService } from './pension.service';

describe('PensionService', () => {
  let httpMock: HttpTestingController;
  let service: PensionService;
  const apiEndpoint = `${environment.endpoint}/pension-estudiantes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PensionService, HttpService]
    });
    service = TestBed.inject(PensionService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('Deberia crear el servicio Pension', () => {
    expect(service).toBeTruthy();
  });

  it('deberia Listar los pensions', () => {
    const listaPensions: Pension[] = [
      new Pension(1,"Nombre 1", 1, "sala 1", "Docente 1", 'Completa', '2020-06-08', 1),
      new Pension(2,"Nombre 2", 2, "sala 2", "Docente 2", 'Maniana', '2020-06-08', 2)
    ];

    service.consultar().subscribe(estudientes => {
      expect(estudientes.length).toBe(2);
      expect(estudientes).toEqual(listaPensions);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(listaPensions);
  });

  it('deberia Listar por Id un Pension', () => {
    const id = 1;
    const pension: Pension = new Pension(1,"Nombre 1", 1, "sala 1", "Docente 1", 'Completa', '2020-06-08', 1);

    service.consultarPorId(id).subscribe(respuesta => {
      expect(respuesta).toBe(pension);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(pension);
  });

  it('deberia Guardar un Pension', () => {
    const pension: Pension = new Pension(1,"Nombre 1", 1, "sala 1", "Docente 1", 'Completa', '2020-06-08', 1);

    service.guardar(pension).subscribe(respuesta => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });

  it('deberia Eliminar un Pension', () => {
    const pension: Pension = new Pension(1,"Nombre 1", 1, "sala 1", "Docente 1", 'Completa', '2020-06-08', 1);

    service.eliminar(pension).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${pension.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });
});
