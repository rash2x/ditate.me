import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Airtable from 'airtable';

import Teachers from './Teachers/Teachers';
import TeacherInfo from './TeacherInfo/TeacherInfo';
import Header from './components/Header/Header';

import { AirtableContext } from './airtable/context';
import { setPractices, setTeachers } from './airtable/reducer';
import Registration from './components/Registration/Registration';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  max-height: -webkit-fill-available;
`;

export const airtableBase = new Airtable({
  apiKey: 'keyEXP4qnVysxeAWt'
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
    <Base>
      <Header />
      <Switch>
        <Route exact path="/">
          <Teachers />
        </Route>
        <Route exact path="/login">
          <Registration />
        </Route>
        <Route path="/:teacherId?">
          <TeacherInfo />
        </Route>
      </Switch>
    </Base>
  );
};

export default App;
