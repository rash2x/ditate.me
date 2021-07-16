import React from 'react';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import Logo from './Logo';

const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;

const LoginToolBar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
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
