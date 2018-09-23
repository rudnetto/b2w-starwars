import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('App test suite', () => {
  it('renders without crashing', () => {
    const element = shallow(<App />);
    expect(element).toMatchSnapshot();
  });
});
