import { Component, OnInit } from '@angular/core';

import { MatriculaService } from './../../shared/service/matricula.service';
import { Matricula } from './../../shared/model/matricula';

@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrls: ['./listar-matricula.component.css']
})
export class ListarMatriculaComponent implements OnInit {

  public titulo = 'Lista de Matricula';
  public columnas = ['#', 'Nombre Estudiante', 'Nombre Docente', 'Sala', 'Jornada', 'Fecha Matricula', 'Acciones'];
  public matriculas: Matricula[] = [];

  constructor(
    protected matriculaService: MatriculaService

  ) { }

  ngOnInit() {
    this.listarMatricula();
  }

  public eliminar(matricula: Matricula) {
    this.matriculaService.eliminar(matricula).subscribe(() => {
      this.listarMatricula();
    });
  }

  private listarMatricula() {
    this.matriculaService.consultar().subscribe(respuesta => {
      this.matriculas = respuesta;
    });
  }

}
