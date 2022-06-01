import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { PensionService } from '../../shared/service/pension.service';

import { CrearPensionComponent } from './crear-pension.component';

describe('CrearPensionComponent', () => {
  let component: CrearPensionComponent;
  let fixture: ComponentFixture<CrearPensionComponent>;
  let service: PensionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPensionComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [PensionService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPensionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PensionService);

    fixture.detectChanges();
  });

  it('deberia crear componente guardar pension', () => {
    expect(component).toBeTruthy();
  });

  it('deberia guardar pension', () => {
    spyOn(service, 'guardar').and.returnValue(of(true));
    component.pensionForm.controls.idEstudiante.setValue(1);
    component.pensionForm.controls.horasMulta.setValue(3);
    component.pensionForm.controls.mesPagado.setValue('2020-01-01');
    expect(component.pensionForm.valid).toBeTruthy();
    component.enviarFormulario();
    expect(service.guardar).toHaveBeenCalled();
  });

});
