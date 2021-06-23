import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import { HomeToolbar, LoginToolBar, TeacherToolbar, PracticesToolbar } from './index';

const Header = () => {
  return (
    <>
      <AppBar color="default">
        <Switch>
          <Route exact path="/">
            <HomeToolbar />
          </Route>
          <Route exact path="/registration">
            <LoginToolBar />
          </Route>
          <Route path="/:teacherId?">
            <TeacherToolbar />
          </Route>
          <Route exact path="/practices">
            <PracticesToolbar />
          </Route>
        </Switch>
      </AppBar>
    </>
  );
};

export default Header;
