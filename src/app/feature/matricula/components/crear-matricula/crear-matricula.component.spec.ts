import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MatriculaService } from '../../shared/service/matricula.service';

import { CrearMatriculaComponent } from './crear-matricula.component';

describe('CrearMatriculaComponent', () => {
  let component: CrearMatriculaComponent;
  let fixture: ComponentFixture<CrearMatriculaComponent>;
  let service: MatriculaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMatriculaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [MatriculaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMatriculaComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MatriculaService);

    fixture.detectChanges();
  });

  it('deberia crear componente guardar pension', () => {
    expect(component).toBeTruthy();
  });

  it('deberia guardar pension', () => {
    spyOn(service, 'guardar').and.returnValue(of(1));
    component.matriculaForm.controls.idEstudiante.setValue(1);
    component.matriculaForm.controls.jornada.setValue(3);
    component.matriculaForm.controls.fechaIngreso.setValue('2020-01-01');
    expect(component.matriculaForm.valid).toBeTruthy();
    component.enviarFormulario();
    expect(service.guardar).toHaveBeenCalled();
  });

});
