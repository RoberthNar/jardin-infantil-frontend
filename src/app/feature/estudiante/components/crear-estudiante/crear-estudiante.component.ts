import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { EstudianteService } from '../../shared/service/estudiante.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  public tituloCrear = 'Registar Estudiante';
  public tituloActualizar = 'Actualizar Estudiante';
  public estudianteForm: FormGroup;
  public id = 0;

  constructor(
    protected estudianteServices: EstudianteService,
    private activatedRoute: ActivatedRoute,
    private roter: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.cargarDatosEdicion(this.id);
    this.construirFormularioEstudiante();
  }

  public enviarFormulario() {
    if (this.id !== undefined) {
      this.actualizarEstudiante();

    }else{
      this.crearEstudiante();
    }


  }

  private crearEstudiante() {
    this.estudianteServices.guardar(this.estudianteForm.value).subscribe(respuesta => {
      console.log(respuesta);
      this.estudianteForm.reset();
    });
  }

  private actualizarEstudiante() {

    console.log(this.estudianteForm.value);

    this.estudianteServices.actualizar(this.estudianteForm.value).subscribe(() => {
      this.estudianteForm.reset();
      this.roter.navigate(['/estudiante/listar']);
    });
  }

  private construirFormularioEstudiante() {
    this.estudianteForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      nombreEstudiante: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      nombreAcudiente: new FormControl('', [Validators.required]),
    });
  }

  private cargarDatosEdicion(id: number) {
    if (id !== undefined) {
      this.estudianteServices.consultarPorId(id).subscribe(respuesta => {
        const fecha = moment(respuesta.fechaNacimiento).format('yyyy-MM-DD');

        this.estudianteForm.setValue({
          id: respuesta.id,
          nombreEstudiante: respuesta.nombreEstudiante,
          fechaNacimiento: fecha,
          nombreAcudiente: respuesta.nombreAcudiente
        });
      });
    }

  }
}
