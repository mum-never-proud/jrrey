import { assertFunction, assertString, assertStringOrRegExp } from '../src/utils/assert';

describe('assert', () => {
  it('assert function', () => {
    expect(() => assertFunction('string')).toThrowError(TypeError);
    expect(assertFunction(() => {})).toEqual(undefined);
  });

  it('assert string', () => {
    expect(() => assertString([])).toThrowError(TypeError);
    expect(assertString('string')).toEqual(undefined);
  });

  it('assert string or regexp', () => {
    expect(() => assertStringOrRegExp([])).toThrowError(TypeError);
    expect(assertStringOrRegExp('string')).toEqual(undefined);
    expect(assertStringOrRegExp(/string/)).toEqual(undefined);
  });
});
