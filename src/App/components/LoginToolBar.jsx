import React from 'react';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';

import Logo from './Logo';
import useRouter from '../hooks/useRouter';

const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;

const LoginToolBar = () => {
  const router = useRouter();

  const handleClick = () => {
    if (router.history.length === 1) {
      router.push('/');
    } else {
      router.history.goBack();
    }
  };

  return (
    <AppBar color="inherit">
      <Toolbar>
        <IconButton onClick={handleClick}>
          <ArrowBack />
        </IconButton>
        <StyledLogo />
      </Toolbar>
    </AppBar>
  );
};

export default LoginToolBar;
