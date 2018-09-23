import React from 'react';
import { shallow } from 'enzyme';

const planetMock = {
  name: 'Tatooine',
  population: '120000',
  terrain: 'Dessert',
  climate: 'Arid',
  filmsFeatured: 5,
};

describe('Planets test suite', () => {
  it('should render', () => {
    jest.doMock('./Service', () => ({ getRandomPlanet: jest.fn(() => Promise.resolve(planetMock)) }));

    const Planets = require('./Planets').default; // eslint-disable-line
    const element = shallow(<Planets />);
    expect(element).toMatchSnapshot();
  });
});
