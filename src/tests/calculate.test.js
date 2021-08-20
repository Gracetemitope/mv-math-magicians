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

describe('returns updated calculator data object', () => {
  test('adds 1 + 1 to equal 2', () => {
    let calculator = calculate({}, '1');
    calculator = calculate(calculator, '+');
    calculator = calculate(calculator, '1');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '2', next: '', operation: ''});
  });
});