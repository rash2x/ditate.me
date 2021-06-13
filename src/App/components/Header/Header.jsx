import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import HomeToolbar from './HomeToolbar';
import TeacherToolbar from './TeacherToolbar';
import LoginToolBar from './LoginToolBar';

const Header = () => {
  return (
    <>
      <AppBar color="default">
        <Switch>
          <Route exact path="/">
            <HomeToolbar />
          </Route>
          <Route exact path="/login">
            <LoginToolBar />
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
