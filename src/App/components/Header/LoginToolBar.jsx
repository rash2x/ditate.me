import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';

import Logo from './Logo';

const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;

const LoginToolBar = () => {
  return (
    <Toolbar>
      <IconButton component={Link} to="/">
        <ArrowBack />
      </IconButton>
      <StyledLogo/>
    </Toolbar>
  )
}

export default LoginToolBar
