import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarEstudianteComponent } from './listar-estudiante.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EstudianteService } from '../../shared/service/estudiante.service';
import { Estudiante } from '../../shared/model/estudiante';
import { HttpService } from 'src/app/core/services/http.service';


describe('ListarEstudianteComponent', () => {
  let component: ListarEstudianteComponent;
  let fixture: ComponentFixture<ListarEstudianteComponent>;
  let estudianteService: EstudianteService;
  const listaEstudiantes: Estudiante[] = [new Estudiante(1, 'Estudiante1', 'Acudiente1', "2020-01-01"), new Estudiante(1, 'Estudiante1', 'Acudiente1', "2020-01-01")];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEstudianteComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [EstudianteService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstudianteComponent);
    component = fixture.componentInstance;
    estudianteService = TestBed.inject(EstudianteService);
    spyOn(estudianteService, 'consultar').and.returnValue(
      of(listaEstudiantes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaEstudiantes.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});
});
