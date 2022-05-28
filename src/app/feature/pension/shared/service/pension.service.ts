import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Pension } from '../model/pension';

@Injectable()
export class PensionService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pension[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar pensions'));
  }

  public guardar(pension: Pension) {
    return this.http.doPost<Pension, boolean>(`${environment.endpoint}/pensions`, pension,
                                                this.http.optsName('crear/actualizar pensions'));
  }

  public eliminar(pension: Pension) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pensions/${pension.id}`,
                                                 this.http.optsName('eliminar pensions'));
  }
}
