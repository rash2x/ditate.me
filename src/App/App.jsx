import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Airtable from 'airtable';

import Teachers from './pages/Teachers/Teachers';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Practices from './pages/Practices/Practices';
import PracticeDetails from './pages/Practices/PracticeDetails';

export const airtableBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
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
        <Route exact path="/practices">
          <Practices />
        </Route>
        <Route path="/event/:eventId?">
          <PracticeDetails />
        </Route>
        <Route path="/:teacherId?">
          <Profile />
        </Route>
      </Switch>
      <NavigationBar />
    </>
  );
};

export default App;
