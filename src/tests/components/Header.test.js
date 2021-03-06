import { shallow } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header.js';
/* global expect */

test('should render header component', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
