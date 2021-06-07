import React, { useState } from 'react';
import Logo from '../Logo';
import { AppBar, Drawer, Toolbar } from '@material-ui/core';
import About from '../About';
import styled from 'styled-components';


const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 340px;
    max-width: 92%;
  }
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
     <AppBar color={'transparent'}>
       <StyledToolbar>
         <Logo onClick={toggleDrawer('about', true)} />
       </StyledToolbar>
     </AppBar>
     <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
       <About />
     </AboutDrawer>
   </>
  )
}

export default Header
