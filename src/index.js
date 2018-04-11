import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//Redux Imports
import {Provider, connect} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
// import {setTextFilter} from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

const store = configureStore();


const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

/*
// store.dispatch(addExpense({description: 'Water Bill', amount: 200, createdAt:400000}));
// store.dispatch(addExpense({description: 'Rent', amount: 3030, createdAt: 30988}));
// store.dispatch(addExpense({description: 'Gas Bill', amount: 135}));

// const state = store.getState();
// console.log(state.expenses);

// setTimeout( () => {
//     store.dispatch(setTextFilter('bill'));
// }
// , 3000);
*/