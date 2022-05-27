import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEstudianteComponent } from './borrar-estudiante.component';

describe('BorrarEstudianteComponent', () => {
  let component: BorrarEstudianteComponent;
  let fixture: ComponentFixture<BorrarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
