import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const initialState = {
  teachers: null,
  practices: null,
  meditations: null,
  currentTeacher: null
}

export const AirtableContext = createContext(initialState);

const Store = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AirtableContext.Provider value={[state, dispatch]}>
      {children}
    </AirtableContext.Provider>
  )
}

export default Store
