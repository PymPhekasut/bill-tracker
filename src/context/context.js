import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 75, "category": "House", "type": "Expense", "date": "2022-01-11", "id": "37308384-8cf8-41f1-977c-f9449c4434d9" }, { "amount": 55, "category": "Travel", "type": "Expense", "date": "2022-01-10", "id": "ad0c997a-2534-4051-8bbe-e5a20095d639" }, { "amount": 50, "category": "Business", "type": "Income", "date": "2022-01-11", "id": "ed4fe33f-ee8d-4393-aef1-a74ff6d4e683" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };
    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const balance = transactions.reduce((acc, currVal) =>
        currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);


    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};
