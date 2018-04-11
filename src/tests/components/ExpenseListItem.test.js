import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
/* global expect */


test('should render an expense list item with a default expense', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expense} />);
    expect(wrapper).toMatchSnapshot();
});

