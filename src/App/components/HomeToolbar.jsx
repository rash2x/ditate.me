import React, { useState } from 'react';
import { AppBar, Drawer, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import About from './About/About';
import Logo from './Logo';

const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.common.black};
    width: 340px;
    max-width: 92%;
  }
`;

const Base = styled(Toolbar)`
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;

const HomeToolbar = () => {
  const [drawers, setDrawer] = useState({
    about: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawer({ ...drawers, [anchor]: open });
  };

  return (
    <AppBar color="inherit">
      <Base>
        <IconButton onClick={toggleDrawer('about', true)}>
          <MenuIcon />
        </IconButton>

        <StyledLogo />
      </Base>

      <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
        <About />
      </AboutDrawer>
    </AppBar>
  );
};

export default HomeToolbar;
