import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { EstudianteService } from '../../shared/service/estudiante.service';

import { CrearEstudianteComponent } from './crear-estudiante.component';

fdescribe('CrearEstudianteComponent', () => {
  let component: CrearEstudianteComponent;
  let fixture: ComponentFixture<CrearEstudianteComponent>;
  let service: EstudianteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstudianteComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [EstudianteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstudianteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EstudianteService);

    fixture.detectChanges();
  });

  it('deberia crear componente guardar estudiante', () => {
    expect(component).toBeTruthy();
  });

  it('deberia guardar estudiante', () => {
    spyOn(service, 'guardar').and.returnValue(of(1));
    component.estudianteForm.controls.nombreEstudiante.setValue('Estudiante Test');
    component.estudianteForm.controls.fechaNacimiento.setValue('2020-01-01');
    component.estudianteForm.controls.nombreAcudiente.setValue('Acudiente Test');
    expect(component.estudianteForm.valid).toBeTruthy();
    component.enviarFormulario();
    expect(service.guardar).toHaveBeenCalled();
  });

  it('deberia actualizar estudiante', () => {
    spyOn(service, 'actualizar').and.returnValue(of(null));
    component.id = 1;
    component.estudianteForm.controls.id.setValue('1');
    component.estudianteForm.controls.nombreEstudiante.setValue('Estudiante Test');
    component.estudianteForm.controls.fechaNacimiento.setValue('2020-01-01');
    component.estudianteForm.controls.nombreAcudiente.setValue('Acudiente Test');
    expect(component.estudianteForm.valid).toBeTruthy();
    component.enviarFormulario();
    expect(service.actualizar).toHaveBeenCalled();
  });
});
