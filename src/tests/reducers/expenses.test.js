/* global expect */
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

//'REMOVE_EXPENSE'

test('should remove expense from state by id', () => {
    const id = expenses[0].id;
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id
    });
    expect(state).toEqual([expenses[1],expenses[2]]); 
});

test('should not remove expenses if id not found', () => {
    const id = -1;
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id
    });
    expect(state).toEqual(expenses); 
});

test('should add an expense', () => {
    const expense = {
    id: '3',
    description: 'Murderbot',
    note: '',
    amount: 395,
    createdAt: 6
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    });
    expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense by id', () => {
    const stateIndex = 0;
    const id = expenses[stateIndex].id;
    const note = 'Hey bud';
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id,
        updates: {note}
    });
    expect(state[stateIndex].note).toBe(note);
});

test('should not edit an expense by wrong id', () => {
    const stateIndex = 1;
    const id = -1;
    const expense = expenses[stateIndex];
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id,
        updates: {note: 'ZBKDK'}
    });
    expect(state[stateIndex]).toEqual(expense);
});

