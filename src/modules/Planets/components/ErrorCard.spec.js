import React from 'react';
import { shallow } from 'enzyme';
import ErrorCard from './ErrorCard';

describe('ErrorCard test suite', () => {
  it('should render with default props', () => {
    const element = shallow(<ErrorCard />);
    expect(element).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const element = shallow(<ErrorCard title="Error" message="This is an error" />);
    expect(element).toMatchSnapshot();
  });
});
