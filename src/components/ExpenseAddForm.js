import React from 'react';
import {addExpense} from '../actions/expenses';
import {connect} from 'react-redux';

// const expenseValues = (e) => {
//     const values = { 
//         description: e.target.description.value,
//         note: e.target.note.value,
//         amount: e.target.amount.value,
//         createdAt: ''
//     };
//     return values;
    
// };

const ExpenseAddForm = (props) => (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            props.dispatch(addExpense({
                description: e.target.description.value,
                note: e.target.note.value,
                amount: e.target.amount.value,
                createdAt: ''
            }))
            
        }}>
            <input type='text' name='description' defaultValue='Enter description'></input>
            <input type='text' name='note' defaultValue='Enter note'></input>
            <input type='text' name='amount' defaultValue='Enter amount'></input>
            <button>Click ME</button>
        </form>
    </div>
);

export default connect()(ExpenseAddForm);

// description = '', 
//         note = '', 
//         amount = 0 , 
//         createdAt = 0  