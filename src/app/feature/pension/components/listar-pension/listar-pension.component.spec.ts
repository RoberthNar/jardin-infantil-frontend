import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensionComponent } from './listar-pension.component';

describe('ListarPensionComponent', () => {
  let component: ListarPensionComponent;
  let fixture: ComponentFixture<ListarPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
