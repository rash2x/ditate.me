import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Airtable from 'airtable';

import Teachers from './Teachers/Teachers';
import TeacherInfo from './TeacherInfo/TeacherInfo';
import Header from './components/Header/Header';

import { AirtableContext } from './airtable/context';
import { setPractices, setTeachers } from './airtable/reducer';
import Registration from './components/Registration/Registration';

export const airtableBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY
}).base('appAB6mLnImrAFBWa');

const App = () => {

  const [, dispatch] = useContext(AirtableContext);

  useEffect(() => {
    airtableBase('Practices')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setPractices(records));
        fetchNextPage();
      });
  }, [dispatch]);

  useEffect(() => {
    airtableBase('Teachers')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setTeachers(records));
        fetchNextPage();
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Teachers />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route path="/:teacherId?">
          <TeacherInfo />
        </Route>
      </Switch>
    </>
  );
};

export default App;
