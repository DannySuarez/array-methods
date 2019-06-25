const { map, filterArray, findIndex, reduce } = require('./index');

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

  it('can find index of value', () => {
    const arr = ['dog', 'cat', 'blue'];
    const index = findIndex(arr, cat => cat == 'cat');
    expect(index).toEqual(1);
  });

  describe('reduce function', () => {
    it('iterated through an array and invokes callback', () => {
      const numbers = [1, 2, 3];
      const callback = jest.fn();

      reduce(numbers, callback, 0);

      expect(callback).toHaveBeenCalledTimes(numbers.length);
    });
    it('iterates through an array and sets updates the acc with result of callback', () => {
      const numbers = [1, 2, 3];

      const sum = reduce(numbers, (acc, item) => acc + item, 0);
      expect(sum).toEqual(6);
    });
  });
});


