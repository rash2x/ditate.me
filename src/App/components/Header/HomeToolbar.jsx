import React, { useState } from 'react';
import { Drawer, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import About from '../About/About';
import Logo from './Logo';

const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 340px;
    max-width: 92%;
  }
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;

const HomeToolbar = () => {
  const [drawers, setDrawer] = useState({
    about: false
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawer({ ...drawers, [anchor]: open });
  };

  return (
    <>
      <StyledToolbar>
        <IconButton onClick={toggleDrawer('about', true)}>
          <MenuIcon />
        </IconButton>

        <StyledLogo />
      </StyledToolbar>

      <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
        <About />
      </AboutDrawer>
    </>
  );
};

export default HomeToolbar;
