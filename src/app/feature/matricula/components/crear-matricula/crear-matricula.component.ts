import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatriculaService } from '../../shared/service/matricula.service';
import { Matricula } from './../../shared/model/matricula';

@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {

  public tituloCrear = 'Registar Matricula';
  public matriculaForm: FormGroup;
  public id = 0;
  public matriculas: Matricula[] = [];
  public captura = '';

  constructor(
    protected matriculaServices: MatriculaService,
    private roter: Router
  ) { }

  ngOnInit() {
    this.listarMatricula();
    this.construirFormularioMatricula();
  }

  public enviarFormulario() {
    this.crearMatricula();
  }

  private crearMatricula() {
    this.matriculaServices.guardar(this.matriculaForm.value).subscribe(respuesta => {
      console.log(respuesta);
      this.matriculaForm.reset();
      this.roter.navigate(['/matricula/listar']);
    }, error => {
      this.captura = error.error.mensaje;
      alert(this.captura);
    });
  }

  private construirFormularioMatricula() {
    this.matriculaForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      idEstudiante: new FormControl(null, [Validators.required]),
      jornada: new FormControl('', [Validators.required]),
      fechaIngreso: new FormControl('', [Validators.required]),
    });
  }

  public listarMatricula() {
    this.matriculaServices.consultarEstudianteSinMatricula().subscribe(respuesta => {
      this.matriculas = respuesta;
    });
  }
}
