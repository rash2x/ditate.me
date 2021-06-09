import React from 'react';

import styled from 'styled-components';
import { Button, Drawer, Typography } from '@material-ui/core';

import Partnership from './Partnership';
import Logo from './components/Header/Logo';

const Base = styled.div`
  background: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.black};
  padding: ${props => props.theme.spacing(3, 2.5)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 4;
`;

const Title = styled(Typography).attrs({
  variant: 'h1'
})``;

const Text = styled(Typography).attrs({
  variant: 'h1'
})`
  margin-top: ${props => props.theme.spacing(4)}px;
`;

const Indigo = styled.span`color: #8c9eff`;
const Cyan = styled.span`color: #A7FFEB`;
const Pink = styled.span`color: #FF80AB`;
const Lime = styled.span`color: #F4FF81`;
const LightGreen = styled.span`color: #CCFF90`;
const LightBlue = styled.span`color: #80D8FF`;

const Content = styled.div`

`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.spacing(3, 0)};
`;

const Copyright = styled.div``;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: ${props => props.theme.spacing(4)}px;

  .MuiButton-root + .MuiButton-root {
    margin-top: ${props => props.theme.spacing(2)}px;
  }
`;

const About = () => {
  const [drawers, setDrawer] = React.useState({
    about: false,
    partnership: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawer({ ...drawers, [anchor]: open });
  };

  return (
    <Base>
      <Content>
        <Title>
          <Logo inverse={true} /> <br />
          Мы сообщество, медитирующих людей 👁
        </Title>
        <Text>
          <Indigo>Динамические медитации</Indigo>, <Cyan>экстатик дэнс</Cyan>,
          шодхан, гвоздестояние, <Pink>тантра</Pink>, <Lime>гонг медитация</Lime>, даосские практики,
          <LightGreen>хиллинг массаж</LightGreen>, <LightBlue>банные церемонии</LightBlue> и остальные практики</Text>
      </Content>
      <Footer>
        <Links>
          <Button size="medium" color="secondary" variant="contained" onClick={toggleDrawer('partnership', true)}>🎯
            Связаться в телеграме</Button>
          <Button size="medium" color="secondary" variant="contained" onClick={toggleDrawer('partnership', true)}>🤝
            Партнёрство</Button>
        </Links>
        <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
      </Footer>

      <Drawer anchor="bottom" open={drawers['partnership']} onClose={toggleDrawer('partnership', false)}>
        <Partnership />
      </Drawer>
    </Base>
  );
};

export default About;
