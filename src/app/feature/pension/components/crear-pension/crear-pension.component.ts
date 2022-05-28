import { Component, OnInit } from '@angular/core';
import { PensionService } from '../../shared/service/pension.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-pension',
  templateUrl: './crear-pension.component.html',
  styleUrls: ['./crear-pension.component.css']
})
export class CrearPensionComponent implements OnInit {
  pensionForm: FormGroup;
  constructor(protected pensionServices: PensionService) { }

  ngOnInit() {
    this.construirFormularioPension();
  }

  cerar() {
    this.pensionServices.guardar(this.pensionForm.value);
  }

  private construirFormularioPension() {
    this.pensionForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
