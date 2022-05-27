import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Matricula } from '../model/matricula';

@Injectable()
export class MatriculaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Matricula[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar matriculas'));
  }

  public guardar(matricula: Matricula) {
    return this.http.doPost<Matricula, boolean>(`${environment.endpoint}/matriculas`, matricula,
                                                this.http.optsName('crear/actualizar matriculas'));
  }

  public eliminar(matricula: Matricula) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/matriculas/${matricula.id}`,
                                                 this.http.optsName('eliminar matriculas'));
  }
}
