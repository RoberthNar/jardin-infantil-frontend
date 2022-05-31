import { Component, OnInit } from '@angular/core';

import { PensionService } from './../../shared/service/pension.service';
import { Pension } from './../../shared/model/pension';


@Component({
  selector: 'app-listar-pension',
  templateUrl: './listar-pension.component.html',
  styleUrls: ['./listar-pension.component.css']
})
export class ListarPensionComponent implements OnInit {

  public titulo = 'Lista de Pension';
  public columnas = ['#', 'Estudiante', 'Docente', 'Sala', 'jornada', 'Horas Multa', 'Mes Pagado', 'Valor Total', 'Acciones'];
  public pensiones: Pension[] = [];

  constructor(
    protected pensionService: PensionService

  ) { }

  ngOnInit() {
    this.listarPension();
  }

  public eliminar(pension: Pension) {
    this.pensionService.eliminar(pension).subscribe(() => {
      this.listarPension();
    });
  }

  private listarPension() {
    this.pensionService.consultar().subscribe(respuesta => {
      this.pensiones = respuesta;
    });
  }
}
