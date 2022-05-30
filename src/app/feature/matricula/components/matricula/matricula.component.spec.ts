import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaComponent } from './matricula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('MatriculaComponent', () => {
  let component: MatriculaComponent;
  let fixture: ComponentFixture<MatriculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
