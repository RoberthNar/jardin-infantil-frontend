import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';

import { Estudiante } from '../model/estudiante';

@Injectable()
export class EstudianteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Estudiante[]>(`${environment.endpoint}/estudiantes`, this.http.optsName('consultar Estudiantes'));
  }

  public consultarPorId(idEstudiante: number) {
    return this.http.doGet<Estudiante>(`${environment.endpoint}/estudiantes/id/${idEstudiante}`,
      this.http.optsName('Consultar Estudiante por ID'));
  }

  public guardar(estudiante: Estudiante) {
    return this.http.doPost<Estudiante, number>(`${environment.endpoint}/estudiantes`, estudiante,
      this.http.optsName('Crear Estudiante'));
  }

  public actualizar(estudiante: Estudiante) {
    return this.http.doPut<Estudiante, any>(`${environment.endpoint}/estudiantes/${estudiante.id}`,
      estudiante, this.http.optsName('actualizar Estudiante'));
  }

  public eliminar(estudiante: Estudiante) {
    return this.http.doDelete<any>(`${environment.endpoint}/estudiantes/${estudiante.id}`,
      this.http.optsName('Eliminar Estudiante'));
  }
}
