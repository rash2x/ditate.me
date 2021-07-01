import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Airtable from 'airtable';

import Teachers from './pages/Teachers/Teachers';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Practices from './pages/Practices/Practices';
import PracticeDialog from './components/PracticeDialog';

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
        <Route path="/practices">
          <Practices />
        </Route>
        <Route path="/:teacherId?">
          <Profile />
        </Route>
      </Switch>
      <Route path="/practices/:eventId?">
        <PracticeDialog open={true} />
      </Route>
      <NavigationBar />
    </>
  );
};

export default App;
