import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../model/estudiante';

@Injectable()
export class EstudianteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Estudiante[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar productos'));
  }

  public guardar(estudiante: Estudiante) {
    return this.http.doPost<Estudiante, boolean>(`${environment.endpoint}/estudiantes`, estudiante,
                                                this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(estudiante: Estudiante) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/estudiantes/${estudiante.id}`,
                                                 this.http.optsName('eliminar productos'));
  }
}
