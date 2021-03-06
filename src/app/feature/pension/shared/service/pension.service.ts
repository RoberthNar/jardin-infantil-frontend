import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';

import { Pension } from '../model/pension';

@Injectable()
export class PensionService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pension[]>(`${environment.endpoint}/pensiones`, this.http.optsName('consultar pensiones'));
  }

  public consultarEstudianteMatricula() {
    return this.http.doGet<Pension[]>(`${environment.endpoint}/matricula-estudiantes/`, this.http.optsName('consultar matriculas'));
  }

  public consultarPorId(id: number) {
    return this.http.doGet<Pension>(`${environment.endpoint}/pensiones/${id}`,
      this.http.optsName('Consultar Pension por ID Estudiante'));
  }

  public guardar(pension: Pension) {
    return this.http.doPost<Pension, any>(`${environment.endpoint}/calculo-pensiones`, pension,
      this.http.optsName('guardar pensiones'));
  }

  public actualizar(pension: Pension) {
    return this.http.doPut<Pension, any>(`${environment.endpoint}/calculo-pensiones/${pension.id}`,
      pension, this.http.optsName('actualizar Pension'));
  }

  public eliminar(pension: Pension) {
    console.log(pension);
    return this.http.doDelete<any>(`${environment.endpoint}/calculo-pensiones/${pension.id}`,
      this.http.optsName('eliminar pensiones'));
  }
}

