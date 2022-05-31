import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';

import { Matricula } from '../model/matricula';

@Injectable()
export class MatriculaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Matricula[]>(`${environment.endpoint}/matricula-estudiantes/`, this.http.optsName('consultar matriculas'));
  }

  public consultarEstudianteSinMatricula() {
    return this.http.doGet<Matricula[]>(`${environment.endpoint}/matricula-estudiantes/estudiantes-sin-matricula`, this.http.optsName('consultar matriculas'));
  }

  public consultarPorId(id: number) {
    return this.http.doGet<Matricula>(`${environment.endpoint}/estudiantes/id/${id}`,
      this.http.optsName('Consultar Matricula por ID Estudiante'));
  }

  public guardar(matricula: Matricula) {
    return this.http.doPost<Matricula, boolean>(`${environment.endpoint}/matricula-estudiantes`, matricula,
      this.http.optsName('guardar matriculas'));
  }

  public eliminar(matricula: Matricula) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/matricula-estudiantes/${matricula.id}`,
      this.http.optsName('eliminar matriculas'));
  }
}
