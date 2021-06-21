import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Airtable from 'airtable';

import Teachers from './pages/Teachers/Teachers';
import TeacherDetails from './pages/TeacherDetails/TeacherDetails';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';

export const airtableBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY
}).base('appAB6mLnImrAFBWa');

const App = () => {
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
          <TeacherDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
