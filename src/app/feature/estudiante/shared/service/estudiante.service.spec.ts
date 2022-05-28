import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { environment } from './../../../../../environments/environment';
import { Estudiante } from './../model/estudiante';
import { EstudianteService } from './estudiante.service';


describe('EstudianteService', () => {
  let httpMock: HttpTestingController;
  let service: EstudianteService;
  const apiEndpoint = `${environment.endpoint}/estudiantes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstudianteService, HttpService]
    });
    service = TestBed.inject(EstudianteService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('Deberia crear el servicio Estudiante', () => {
    expect(service).toBeTruthy();
  });

  it('deberia Listar los estudiantes', () => {
    const listaEstudiantes: Estudiante[] = [
      new Estudiante('Estudiante1', '2020-04-08', 'Acudiente1', 1),
      new Estudiante('Estudiante2', '2021-04-09', 'Acudiente2', 2)
    ];

    service.consultar().subscribe(estudientes => {
      expect(estudientes.length).toBe(2);
      expect(estudientes).toEqual(listaEstudiantes);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(listaEstudiantes);
  });

  it('deberia Listar por Id un Estudiante', () => {
    const id = 1;
    const estudiante: Estudiante = new Estudiante('Estudiante1', '2020-04-08', 'Acudiente1', 1);

    service.consultarPorId(id).subscribe(respuesta => {
      expect(respuesta).toBe(estudiante);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(estudiante);
  });

  it('deberia Guardar un Estudiante', () => {
    const estudiante: Estudiante = new Estudiante('Estudiante1', '2020-04-08', 'Acudiente1');

    service.guardar(estudiante).subscribe(respuesta => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpoint);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });

  it('deberia Actualizar un Estudiante', () => {
    const estudiante: Estudiante = new Estudiante('Estudiante1', '2020-04-08', 'Acudiente1', 1);

    service.actualizar(estudiante).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${estudiante.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<any>());
  });

  it('deberia Eliminar un Estudiante', () => {
    const estudiante: Estudiante = new Estudiante('Estudiante1', '2020-04-08', 'Acudiente1', 1);

    service.eliminar(estudiante).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpoint}/${estudiante.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });
});
