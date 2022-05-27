import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../shared/service/estudiante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  estudianteForm: FormGroup;
  constructor(protected estudianteServices: EstudianteService) { }

  ngOnInit() {
    this.construirFormularioEstudiante();
  }

  cerar() {
    this.estudianteServices.guardar(this.estudianteForm.value);
  }

  private construirFormularioEstudiante() {
    this.estudianteForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
