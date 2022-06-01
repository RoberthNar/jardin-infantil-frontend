import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { environment } from './../../../../../environments/environment';
import { Matricula } from './../model/Matricula';
import { MatriculaService } from './matricula.service';

describe('MatriculaService', () => {
  let httpMock: HttpTestingController;
  let service: MatriculaService;
  const apiEndpoint = `${environment.endpoint}/matricula-estudiantes`;
  const apiEndpointListarPorId = `${environment.endpoint}/estudiantes/id`;
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatriculaService, HttpService]
    });
    service = TestBed.inject(MatriculaService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('Deberia crear el servicio Matricula', () => {
    expect(service).toBeTruthy();
  });

  it('deberia Listar los matriculas', () => {
    const listaMatriculas: Matricula[] = [
      new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 1),
      new Matricula(2, 'Nombre 2', 2, 'sala 2', 'Docente 2', 'Maniana', '2020-06-08', 2)
    ];

    service.consultar().subscribe(matriculas => {
      expect(matriculas.length).toBe(2);
      expect(matriculas).toEqual(listaMatriculas);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(listaMatriculas);
  });

  it('deberia Listar por Id un Matricula', () => {
    const id = 1;
    const matricula: Matricula = new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 1);

    service.consultarPorId(id).subscribe(respuesta => {
      expect(respuesta).toBe(matricula);
    });
    const req = httpMock.expectOne(`${apiEndpointListarPorId}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(matricula);
  });

  it('deberia Guardar una Matricula', () => {
    const matricula: Matricula = new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 1);

    service.guardar(matricula).subscribe(respuesta => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });

  it('deberia Eliminar una Matricula', () => {
    const matricula: Matricula = new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 1);

    service.eliminar(matricula).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${matricula.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });
});
