import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
    new Pension(1, 1, '2022-07-12', 1)
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPensionComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PensionService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPensionComponent);
    component = fixture.componentInstance;
    pensionService = TestBed.inject(PensionService);
    spyOn(pensionService, 'consultar').and.returnValue(
      of(listaPensions)
    );
    fixture.detectChanges();
  });
});
