import calculate from "../logic/calculate";

describe('returns default calculator data object', () => {
  test('calculates AC operation', () => {
    const calculator = {
      total: 10,
      next: '',
      operation: '+',
    };

    const updatedCalculator = calculate(calculator, 'AC');
    expect(updatedCalculator).toEqual({ total: 0, next: '', operation: ''});
  });
});