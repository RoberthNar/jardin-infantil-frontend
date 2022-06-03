import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

import { Pension } from '../../shared/model/pension';
import { PensionService } from '../../shared/service/pension.service';
import { ListarPensionComponent } from './listar-pension.component';


describe('ListarPensionComponent', () => {
  let component: ListarPensionComponent;
  let fixture: ComponentFixture<ListarPensionComponent>;
  let pensionService: PensionService;
  const listaPensions: Pension[] = [
    new Pension(1, 1, '2022-07-12', 1),
    new Pension(2, 1, '2022-07-12', 2)
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPensionComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [PensionService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPensionComponent);
    component = fixture.componentInstance;
    pensionService = TestBed.inject(PensionService);
    spyOn(pensionService, 'consultar').and.returnValue(of(listaPensions));
    spyOn(pensionService, 'eliminar').and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('deberia crear componente listar pension', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las pensiones', () => {
    const listadoPension = 'listarPension';
    component[listadoPension]();
    expect(pensionService.consultar).toHaveBeenCalled();
    expect(2).toBeGreaterThanOrEqual(component.pensiones.length);
  });

  it('deberia eliminar la pension', () => {
    component.eliminar(listaPensions[0]);
    expect(pensionService.eliminar).toHaveBeenCalled();
  });

});
