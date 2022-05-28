import { Estudiante } from './estudiante';

describe('Estudiante', () => {
  it('should create an instance', () => {
    expect(new Estudiante('estudiante', '26-08-2020', 'acudiente')).toBeTruthy();
  });
});
