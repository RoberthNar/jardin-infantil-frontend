import { Component, OnInit } from '@angular/core';

import { Estudiante } from './../../shared/model/estudiante';
import { EstudianteService } from './../../shared/service/estudiante.service';



@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  public titulo = 'Lista de Estudiantes';
  public columnas = ['#', 'Estudiante', 'Fecha Nacimiento', 'Acudiente', 'Acciones'];
  public estudiantes: Estudiante[] = [];

  constructor(
    protected estudianteService: EstudianteService

  ) { }

  ngOnInit() {
    this.listarEstuciantes();
  }

  public eliminar(estudiante: Estudiante) {
    this.estudianteService.eliminar(estudiante).subscribe(() => {
      this.listarEstuciantes();
    });
  }

  private listarEstuciantes() {
    this.estudianteService.consultar().subscribe(respuesta => {
      this.estudiantes = respuesta;
    });
  }
}
