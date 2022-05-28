import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../shared/service/matricula.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;


@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {
  matriculaForm: FormGroup;
  constructor(protected matriculaServices: MatriculaService) { }

  ngOnInit() {
    this.construirFormularioMatricula();
  }

  cerar() {
    this.matriculaServices.guardar(this.matriculaForm.value);
  }

  private construirFormularioMatricula() {
    this.matriculaForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
