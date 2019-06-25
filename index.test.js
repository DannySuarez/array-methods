const { map, filterArray, findIndex } = require('./index');

describe('function testing', () => {
  it('can take a callback function and double', () => {
    const arr = [2, 4, 6, 8];
    const double = map(arr, arr => arr * 2);
    expect(double).toEqual([4, 8, 12, 16]);
  });

  it('returns a mapped array with the same length as', () => {
    const colors = ['red', 'greem', 'blue'];
    const mapped = map(colors, color => color.toUpperCase());
    expect(mapped).toHaveLength(colors.length);
  });

  it('can take a callback function and squares number', () => {
    const arr = [2, 4, 6, 8];
    const double = map(arr, arr => arr * arr);
    expect(double).toEqual([4, 16, 36, 64]);
  });

  it('can filter', () => {
    const arr = [2, 4, 5, 6, 8];
    const filtered = filterArray(arr, arr => arr % 2 === 0);
    expect(filtered).toEqual([2, 4, 6, 8]);
  });
});
