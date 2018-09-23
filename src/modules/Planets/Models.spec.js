import Models from './Models';

describe('Models test suite', () => {
  it('should preserve structure', () => {
    expect(Models).toMatchSnapshot();
  });
});
