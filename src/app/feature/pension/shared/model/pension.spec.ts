import { Pension } from './pension';

describe('Pension', () => {
  it('should create an instance', () => {
    expect(new Pension(1, 1, '2022-07-12', 1)).toBeTruthy();
  });
});
