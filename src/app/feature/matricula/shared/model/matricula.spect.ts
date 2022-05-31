import { Matricula } from './matricula';

describe('Matricula', () => {
  it('should create an instance', () => {
    expect(new Matricula(1,"Nombre 1", 1, "sala 1", "Docente 1", 'Completa', '2020-06-08', 1)).toBeTruthy();
  });
});
