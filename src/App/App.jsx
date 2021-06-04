import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {AppBar, Container, Drawer, Toolbar} from '@material-ui/core';
import {Switch, Route} from 'react-router-dom';

import Teachers from './Teachers/Teachers';
import About from './About';
import Logo from './Logo';
import Store from "./airtable/context";
import TeacherInfo from "./Teachers/TeacherInfo";

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  max-height: -webkit-fill-available;
`;

const Header = styled(Toolbar)`
  justify-content: center;
`;

const AboutDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 340px;
    max-width: 92%;
  }
`;

const App = () => {
    const [drawers, setDrawer] = useState({
        about: false
    });

    const toggleDrawer = (anchor, open) => () => {
        setDrawer({...drawers, [anchor]: open});
    };

    return (
        <Base>
            <AppBar color={'transparent'}>
                <Header>
                    <Logo onClick={toggleDrawer('about', true)}/>
                </Header>
            </AppBar>

            <Store>
                <Switch>
                    <Route exact path="/">
                        <Teachers/>
                    </Route>
                    <Route path="/:teacherId">
                        <TeacherInfo/>
                    </Route>
                </Switch>
            </Store>

            <AboutDrawer anchor="left" open={drawers['about']} onClose={toggleDrawer('about', false)}>
                <About/>
            </AboutDrawer>

        </Base>
    );
};

export default App;
