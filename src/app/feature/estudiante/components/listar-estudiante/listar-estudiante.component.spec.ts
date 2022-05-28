import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
    new Estudiante('Estudiante1', 'Acudiente1', '2020-01-01', 2)
  ];


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
});
