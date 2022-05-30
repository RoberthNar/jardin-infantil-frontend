import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
    new Matricula(1, 1, 'Completa', '2020-06-08', 1),
    new Matricula(1, 1, 'Completa', '2020-06-08', 2)
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMatriculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MatriculaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMatriculaComponent);
    component = fixture.componentInstance;
    matriculaService = TestBed.inject(MatriculaService);
    spyOn(matriculaService, 'consultar').and.returnValue(
      of(listaMatriculas)
    );
    fixture.detectChanges();
  });
});
