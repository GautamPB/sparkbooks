import React, { useContext, createContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = (
    { reducer, initialState, children } //wraps the app which gives the value of a varibale in the data layer
) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext) //hook to pull data from the data layer
