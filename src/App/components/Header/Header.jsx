import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import { HomeToolbar, LoginToolBar, PracticesToolbar } from './index';

const Header = () => {
  return (
    <>
      <AppBar color="inherit">
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/practices">
            <PracticesToolbar />
          </Route>
          <Route exact path="/registration">
            <LoginToolBar />
          </Route>
        </Switch>
      </AppBar>
    </>
  );
};

export default Header;
