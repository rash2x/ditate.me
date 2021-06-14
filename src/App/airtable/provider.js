import React, { useEffect, useReducer } from 'react';
import reducer, { setPractices, setTeachers } from './reducer';
import { airtableBase } from '../App';
import { mapPractices, mapTeachers } from './mappers';
import { AirtableContext, initialState } from './context';

export const AirtableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    airtableBase('Practices')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setPractices(mapPractices(records)));
        fetchNextPage();
      });
  }, [dispatch]);

  useEffect(() => {
    airtableBase('Teachers')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setTeachers(mapTeachers(records)));
        fetchNextPage();
      });
  }, [dispatch]);

  return (
    <AirtableContext.Provider value={[state, dispatch]}>
      {children}
    </AirtableContext.Provider>
  )
}
