import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
    const a = 5;
    const b = 8;
    test('should add two numbers', () => {
        const result = a + b;
        expect(simpleCalculator({ a, b, action: Action.Add })).toBe(result);
    });

    test('should substract two numbers', () => {
        const result = a - b;
        expect(simpleCalculator({ a, b, action: Action.Substract })).toBe(
            result,
        );
    });

    test('should multiply two numbers', () => {
        const result = a * b;
        expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(
            result,
        );
    });

    test('should divide two numbers', () => {
        const result = a / b;
        expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(result);
    });

    test('should exponentiate two numbers', () => {
        const result = a ** b;
        expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(
            result,
        );
    });

    test('should return null for invalid action', () => {
        const incorrectAction = '+-';
        const suggestedResult = null;
        expect(simpleCalculator({ a, b, action: incorrectAction })).toBe(
            suggestedResult,
        );
    });

    test('should return null for invalid arguments', () => {
        const incorrectArguments = {a: 'string', b: 'one more string'};
        const suggestedResult = null;
        expect(simpleCalculator({ ...incorrectArguments, action: Action.Add })).toBe(
            suggestedResult,
        );
    });
});
