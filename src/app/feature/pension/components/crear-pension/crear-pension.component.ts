import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PensionService } from '../../shared/service/pension.service';
import { Pension } from './../../shared/model/pension';

@Component({
  selector: 'app-crear-pension',
  templateUrl: './crear-pension.component.html',
  styleUrls: ['./crear-pension.component.css']
})
export class CrearPensionComponent implements OnInit {

  public tituloCrear = 'Registar Pension';
  public pensionForm: FormGroup;
  public id = 0;
  public pensiones: Pension[] = [];
  public captura = '';

  constructor(
    protected pensionServices: PensionService,
    private roter: Router
  ) { }

  ngOnInit() {
    this.listarMatricula();
    this.construirFormularioPension();
  }

  public enviarFormulario() {
    this.crearPension();
  }

  private crearPension() {
    this.pensionServices.guardar(this.pensionForm.value).subscribe(respuesta => {
      console.log(respuesta);
      this.pensionForm.reset();
      this.roter.navigate(['/pension/listar']);
    }, error => {
      this.captura = error.error.mensaje;
      alert(this.captura);
    });
  }

  private construirFormularioPension() {
    this.pensionForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      idEstudiante: new FormControl(null, [Validators.required]),
      horasMulta: new FormControl('', [Validators.required]),
      mesPagado: new FormControl('', [Validators.required]),
    });
  }

  public listarMatricula() {
    this.pensionServices.consultarEstudianteMatricula().subscribe(respuesta => {
      this.pensiones = respuesta;
    });
  }
}
