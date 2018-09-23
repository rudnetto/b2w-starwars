import React from 'react';
import { shallow } from 'enzyme';
import PlanetCard from './PlanetCard';

const planetMock = {
  name: 'Tatooine',
  population: '120000',
  terrain: 'Dessert',
  climate: 'Arid',
  filmsFeatured: 5,
};

describe('PlanetCard test suite', () => {
  it('should render', () => {
    const element = shallow(<PlanetCard planet={planetMock} />);
    expect(element).toMatchSnapshot();
  });

  it('should render error', () => {
    const element = shallow(<PlanetCard planet={null} />);
    expect(element).toMatchSnapshot();
  });
});
