import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import Home from '../pages/Home/Home';

const Base = styled(Container)``;

const App = () => {
  return (
    <Base>
      <Home />
    </Base>
  );
};

export default App;
