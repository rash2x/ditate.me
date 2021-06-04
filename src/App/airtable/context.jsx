import React, {createContext, useEffect, useReducer} from 'react';
import reducer from "./reducer";

export const initialState = {
    teachers: null,
    practices: null,
    meditations: null
}

export const Context = createContext(initialState);

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
                {children}
        </Context.Provider>
    )
}

export default Store
