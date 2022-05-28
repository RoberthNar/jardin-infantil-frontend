import { Matricula } from './matricula';

describe('Matricula', () => {
  it('should create an instance', () => {
    expect(new Matricula(1, 1, 'COMPLETA', '2022-07-12', 1)).toBeTruthy();
  });
});
