import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarMatriculaComponent } from './borrar-matricula.component';

describe('BorrarMatriculaComponent', () => {
  let component: BorrarMatriculaComponent;
  let fixture: ComponentFixture<BorrarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
