import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatriculaService } from './../../shared/service/matricula.service';
import { Matricula } from './../../shared/model/matricula';

@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrls: ['./listar-matricula.component.css']
})
export class ListarMatriculaComponent implements OnInit {

  public listaMatriculas: Observable<Matricula[]>;

  constructor(protected matriculaService: MatriculaService) { }

  ngOnInit() {
    this.listaMatriculas = this.matriculaService.consultar();
  }

}
