import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPensionComponent } from './borrar-pension.component';

describe('BorrarPensionComponent', () => {
  let component: BorrarPensionComponent;
  let fixture: ComponentFixture<BorrarPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
