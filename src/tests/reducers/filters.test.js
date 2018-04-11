import moment from 'moment';
import filtersReducer from '../../reducers/filters';
/*global expect */

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})    
    expect(state.sortBy).toBe('amount');
});

//DATE IS DEFAULT SETTING - CHANGE TO AMOUNT THEN BACK TO TEST
test('should set sortBy to date' , () => {
    const currentState = {
        text: '',
        startDate: '',
        endDate: '',
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//RUN START AND END DATE TESTS WITH MOMENT OBJECTS
test('should set start date', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {type:'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {type:'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
})

test('should set text filter', () => {
    const text = 'Glob';
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
    
})