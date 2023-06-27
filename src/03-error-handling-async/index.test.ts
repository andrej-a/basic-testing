import { resolveValue, throwError, throwCustomError, rejectCustomError } from './index';

describe('resolveValue', () => {
  const valueToResolved = 'lemon';
  test('should resolve provided value', async () => {
    expect(resolveValue(valueToResolved)).resolves.toBe(valueToResolved);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMessage = 'I`m an error, ooooops!'
    expect(() => throwError(errorMessage)).toThrow(errorMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultErrorMessage = 'Oops!';
    expect(throwError).toThrow(defaultErrorMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const customErrorMessage = 'This is my awesome custom error!';
    expect(throwCustomError).toThrow(customErrorMessage)
  });
});

describe('rejectCustomError', () => {
  const customErrorMessage = 'This is my awesome custom error!';
  test('should reject custom error', async () => {
    await expect(rejectCustomError).rejects.toThrow(customErrorMessage)
  });
});
