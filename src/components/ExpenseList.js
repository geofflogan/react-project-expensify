import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (
                    props.expenses.map((expense) =>(
                        <ExpenseListItem key={expense.id} {...expense} />
                    ))
                )
            }
            
        </div>
    );
};

const mapStateToProps= (state) => {
    return {
        expenses: SelectExpenses(state.expenses,state.filters)
        //Select visible expenses only ../selectors/expenses.js
    };
};

export default connect(mapStateToProps)(ExpenseList);



