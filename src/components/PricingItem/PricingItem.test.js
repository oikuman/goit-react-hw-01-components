import React from 'react';
import { shallow } from 'enzyme';
import PricingItem from './PricingItem';

describe('<PricingItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<PricingItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
