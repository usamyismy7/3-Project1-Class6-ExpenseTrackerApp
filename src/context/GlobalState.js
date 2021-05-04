import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Create the initial state
const initialState = {
    transactions: [
        {id: 1, description: "Income1", transactionAmount:1000},
        {id: 2, description: "Expense1", transactionAmount:-100}
    ]
}

export const GlobalContext = createContext(initialState);

//Create  a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}