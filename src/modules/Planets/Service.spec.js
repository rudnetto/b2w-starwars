describe('Planets service test suite', () => {
  it('should retrieve data correctly', () => {
    const httpResultMock = {
      data: {
        name: 'Tatooine',
        population: '120000',
        terrain: 'Dessert',
        climate: 'Arid',
        films: [
          'episodeI',
          'episodeIII',
          'episodeIV',
          'episodeV',
          'episodeVI',
        ],
      },
    };
    const get = jest.fn(() => httpResultMock);
    jest.doMock('../../utils/HttpClient', () => ({ get }));
    jest.doMock('../../utils/Random', () => ({ generateRandomNumber: () => 1 }));

    const Service = require('./Service').default; // eslint-disable-line
    const result = Service.getRandomPlanet();

    expect(get).toBeCalledWith('/planets/1');
    expect(result).toMatchSnapshot();
  });
});
