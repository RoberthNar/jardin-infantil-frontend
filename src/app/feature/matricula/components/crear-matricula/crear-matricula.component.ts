import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    protected matriculaServices: MatriculaService
  ) { }

  ngOnInit() {
    this.listarMatricula();
    this.construirFormularioMatricula();
  }

  public enviarFormulario() {
    this.crearMatricula();
  }

  private crearMatricula() {
    //this.matriculaForm.value.idEstudiante =  this.matriculaForm.value.nombreEstudiante;
    console.log('datos');
    console.log(this.matriculaForm.value);
    this.matriculaServices.guardar(this.matriculaForm.value).subscribe(respuesta => {
      console.log(respuesta);
      this.matriculaForm.reset();
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
