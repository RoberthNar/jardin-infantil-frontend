import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPensionComponent } from './crear-pension.component';

describe('CrearPensionComponent', () => {
  let component: CrearPensionComponent;
  let fixture: ComponentFixture<CrearPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
