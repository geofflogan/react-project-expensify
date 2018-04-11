import moment from 'moment';
//Get visible expenses
//Requires the expenses and filters object from the store
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(startDateMatch, endDateMatch);
        // figure out if the expenses.description contains the text variable string inside it
        // includes method on strings
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibleExpenses;