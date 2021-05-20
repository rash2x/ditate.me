import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

const Base = styled(Container)``;

const App = () => {
  return (
    <Base>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </Base>
  );
};

export default App;
