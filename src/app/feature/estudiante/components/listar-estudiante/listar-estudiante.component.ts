import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EstudianteService } from './../../shared/service/estudiante.service';
import { Estudiante } from './../../shared/model/estudiante';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {
  public listaEstudiantes: Observable<Estudiante[]>;

  constructor(protected estudianteService: EstudianteService) { }

  ngOnInit() {
    this.listaEstudiantes = this.estudianteService.consultar();
  }

}
