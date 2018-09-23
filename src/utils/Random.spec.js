import Random from './Random';

describe('Random util test suite', () => {
  it('should generate a random number', () => {
    const result = Random.generateRandomNumber(3, 5);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(3);
    expect(result).toBeLessThanOrEqual(5);
  });
});
