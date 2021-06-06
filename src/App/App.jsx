import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import { AppBar, Container, Drawer, Toolbar } from '@material-ui/core';
import Airtable from 'airtable';

import Teachers from './Teachers/Teachers';
import About from './About';
import Logo from './Logo';
import TeacherInfo from './TeachersInfo/TeachersInfo';

import { AirtableContext } from './airtable/context';
import { setPractices, setTeachers } from './airtable/reducer';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  max-height: -webkit-fill-available;
`;

const Header = styled(Toolbar)`
  justify-content: center;
`;

const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 340px;
    max-width: 92%;
  }
`;

export const airtableBase = new Airtable({
  apiKey: 'keyEXP4qnVysxeAWt'
}).base('appAB6mLnImrAFBWa');

const App = () => {

  const [dispatch] = useContext(AirtableContext)
  const [drawers, setDrawer] = useState({
    about: false
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawer({ ...drawers, [anchor]: open });
  };

  useEffect(() => {
    airtableBase('Practices')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setPractices(records));
        fetchNextPage();
      })
  }, [dispatch])

  useEffect(() => {
    airtableBase('Teachers')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        dispatch(setTeachers(records))
        fetchNextPage();
      })
  }, [dispatch]);

  return (
    <Base>
      <AppBar color={'transparent'}>
        <Header>
          <Logo onClick={toggleDrawer('about', true)} />
        </Header>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Teachers />
        </Route>
        <Route path="/:teacherId?">
          <TeacherInfo />
        </Route>
      </Switch>

      <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
        <About />
      </AboutDrawer>
    </Base>
  );
};

export default App;
