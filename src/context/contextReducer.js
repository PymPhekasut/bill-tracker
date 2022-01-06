//Reducer => a function that takes in the old state, and an action => new state


const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);

            localStorage.setItem('transaction', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            localStorage.setItem('transaction', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    }

    // if(action.type === 'DELETE_TRANSACTION') {
    // } else if(action.type === 'ADD_TRANSACTION')
};

export default contextReducer;