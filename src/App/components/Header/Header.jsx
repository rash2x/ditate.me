import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import { HomeToolbar, LoginToolBar, TeacherToolbar, PracticesToolbar } from './index';

const Header = () => {
  return (
    <>
      <AppBar color="inherit">
        <Switch>
          <Route exact path="/">
            <HomeToolbar />
          </Route>
          <Route exact path="/registration">
            <LoginToolBar />
          </Route>
          <Route exact path="/practices">
            <PracticesToolbar />
          </Route>
          <Route path="/:teacherId?">
            <TeacherToolbar />
          </Route>
        </Switch>
      </AppBar>
    </>
  );
};

export default Header;
