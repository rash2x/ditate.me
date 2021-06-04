import React, {createContext, useReducer} from 'react';
import reducer, {initialState} from "./reducer";

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default Store
