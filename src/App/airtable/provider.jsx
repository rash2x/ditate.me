import React, { useEffect, useReducer } from 'react';
import reducer, { setEvents, setPractices, setTeachers } from './reducer';
import { mapEvents, mapPractices, mapTeachers } from './mappers';
import { AirtableContext, initialState } from './context';
import { airtableBase } from '../../pages/_app';

const AirtableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    airtableBase('Practices')
      .select({
        view: 'Grid view',
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setPractices(mapPractices(records)));
        fetchNextPage();
      });
  }, [dispatch]);

  useEffect(() => {
    airtableBase('Teachers')
      .select({
        view: 'Grid view',
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setTeachers(mapTeachers(records)));
        fetchNextPage();
      });
  }, [dispatch]);

  useEffect(() => {
    airtableBase('Events')
      .select({
        view: 'Grid view',
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setEvents(mapEvents(records)));
        fetchNextPage();
      });
  }, [dispatch]);

  return <AirtableContext.Provider value={[state, dispatch]}>{children}</AirtableContext.Provider>;
};

export default AirtableProvider;
