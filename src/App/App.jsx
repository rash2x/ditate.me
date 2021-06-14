import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Airtable from 'airtable';

import Teachers from './Teachers/Teachers';
import TeacherInfo from './TeacherInfo/TeacherInfo';
import Header from './components/Header/Header';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  max-height: -webkit-fill-available;
`;

export const airtableBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY
}).base('appAB6mLnImrAFBWa');

const App = () => {
  return (
    <Base>
      <Header />
      <Switch>
        <Route exact path="/">
          <Teachers />
        </Route>
        <Route path="/:teacherId?">
          <TeacherInfo />
        </Route>
      </Switch>
    </Base>
  );
};

export default App;
