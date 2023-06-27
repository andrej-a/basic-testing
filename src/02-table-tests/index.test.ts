import { simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 3, b: 2, action: Action.Substract, expected: 1 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 10, b: 5, action: Action.Divide, expected: 2 },
    { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
    { a: 5, b: 2, action: 'Invalid action', expected: null },
    { a: 'just string', b: 'not a number', action: Action.Add, expected: null },
    // continue cases for other actions
];

describe('simpleCalculator', () => {
    test.each(testCases)('%#. %s', ({ a, b, action, expected }) => {
        expect(simpleCalculator({ a, b, action })).toBe(expected);
    });
});
