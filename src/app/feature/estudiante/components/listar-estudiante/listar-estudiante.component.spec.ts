import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

import { Estudiante } from '../../shared/model/estudiante';
import { EstudianteService } from '../../shared/service/estudiante.service';
import { ListarEstudianteComponent } from './listar-estudiante.component';


describe('ListarEstudianteComponent', () => {
  let component: ListarEstudianteComponent;
  let fixture: ComponentFixture<ListarEstudianteComponent>;
  let estudianteService: EstudianteService;
  const listaEstudiantes: Estudiante[] = [
    new Estudiante('Estudiante1', 'Acudiente1', '2020-01-01', 1),
    new Estudiante('Estudiante2', 'Acudiente1', '2020-01-01', 2)
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEstudianteComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [EstudianteService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstudianteComponent);
    component = fixture.componentInstance;
    estudianteService = TestBed.inject(EstudianteService);
    spyOn(estudianteService, 'consultar').and.returnValue(of(listaEstudiantes));
    spyOn(estudianteService, 'eliminar').and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('deberia crear componente listar estudiante', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar los estudiantes', () => {
    component['listarEstuciantes']();
    expect(estudianteService.consultar).toHaveBeenCalled();
    expect(2).toBeGreaterThanOrEqual(component.estudiantes.length);
  });

  it('deberia eliminar los estudiantes', () => {
    component.eliminar(listaEstudiantes[0]);
    expect(estudianteService.eliminar).toHaveBeenCalled();
  });

});
