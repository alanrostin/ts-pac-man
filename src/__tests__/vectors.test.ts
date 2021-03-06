import {
  addVectors,
  multiplyVectors,
  ceilingVector,
  isNegationOfVector,
} from '../vectors';

describe('vector operations', () => {
  describe('addVectors', () => {
    it('should linearly add the vectors it receives as params', () => {
      const vectors = [[1, 5, 4, 7], [3, 1, 6, 10], [2, 2, 5, -3]];

      expect(addVectors(...vectors)).toEqual([6, 8, 15, 14]);
    });
  });

  describe('multiplyVectors', () => {
    it('should linearly multiply the vectors it receives as params', () => {
      const vectors = [[2, 5, 4, 7], [3, 1, 6, 10], [2, 2, 5, -3]];

      expect(multiplyVectors(...vectors)).toEqual([12, 10, 120, -210]);
    });
  });

  describe('ceilingVector', () => {
    it('should round all numbers of a vector up to the next whole number', () => {
      const vector = [0.02, 1.9, -1.4];

      expect(ceilingVector(vector)).toEqual([1, 2, -1]);
    });
  });

  describe('isNegationOfVector', () => {
    it('should return true if vector matches the negation when negated', () => {
      const vector = [2, -3, 1];
      const negation = [-2, 3, -1];

      expect(isNegationOfVector(negation, vector)).toBe(true);
    });

    it('should return false if vector doesn`t match the negation', () => {
      const vector = [2, 3, -1];
      const negation = [-2, 3, -1];

      expect(isNegationOfVector(negation, vector)).toBe(false);
    });
  });
});
