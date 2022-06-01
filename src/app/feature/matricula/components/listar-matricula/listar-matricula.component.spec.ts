import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

import { Matricula } from '../../shared/model/matricula';
import { MatriculaService } from '../../shared/service/matricula.service';
import { ListarMatriculaComponent } from './listar-matricula.component';


describe('ListarMatriculaComponent', () => {
  let component: ListarMatriculaComponent;
  let fixture: ComponentFixture<ListarMatriculaComponent>;
  let matriculaService: MatriculaService;
  const listaMatriculas: Matricula[] = [
    new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 1),
    new Matricula(1, 'Nombre 1', 1, 'sala 1', 'Docente 1', 'Completa', '2020-06-08', 2)
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMatriculaComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [MatriculaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMatriculaComponent);
    component = fixture.componentInstance;
    matriculaService = TestBed.inject(MatriculaService);
    spyOn(matriculaService, 'consultar').and.returnValue(of(listaMatriculas));
    spyOn(matriculaService, 'eliminar').and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('deberia crear componente listar matriculas', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las matriculas', () => {
    component['listarMatricula']();
    expect(matriculaService.consultar).toHaveBeenCalled();
    expect(2).toBeGreaterThanOrEqual(component.matriculas.length);
  });

  it('deberia eliminar la matricula', () => {
    component.eliminar(listaMatriculas[0]);
    expect(matriculaService.eliminar).toHaveBeenCalled();
  });


});
