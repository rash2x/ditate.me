import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppBar, Drawer, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

import TeacherLogo from './TeacherLogo';
import About from '../About';
import Logo from '../Logo';

const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 340px;
    max-width: 92%;
  }
`;

const AppBarCase = styled(AppBar)`
  background: #2f3237;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: center;
`;

const Header = () => {
  const [drawers, setDrawer] = useState({
    about: false
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawer({ ...drawers, [anchor]: open });
  };

  return (
    <>
      <AppBarCase>
        <StyledToolbar>

          <Switch>
            <Route exact path="/">
              <Logo drawers={drawers} onClick={toggleDrawer('about', true)} />
            </Route>
            <Route path="/:teacherId?">
              <TeacherLogo />
            </Route>
          </Switch>

        </StyledToolbar>
      </AppBarCase>

      <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
        <About />
      </AboutDrawer>
    </>
  );
};

export default Header;
