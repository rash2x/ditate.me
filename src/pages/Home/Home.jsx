import React from 'react';
import styled from 'styled-components';
import { Button, Chip, Typography } from '@material-ui/core';

const Base = styled.div`
  padding-top: ${props => props.theme.spacing(3)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-height: -webkit-fill-available;
`;

const Title = styled(Typography).attrs({
  variant: 'h1'
})`

`;

const Beta = styled.div`
  background: #FFF;
  display: inline-flex;
  
  position: relative;
  top: ${props => props.theme.spacing(-1.5)}px;
  left: ${props => props.theme.spacing(0.5)}px;
  
  color: #000;
  font-size: 0.875rem;
  border-radius: 3px;
  padding: ${props => props.theme.spacing(0.25, 1)};
`;

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

const ScheduleButton = styled(Button)`
  margin-top: ${props => props.theme.spacing(3)}px;
`;

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

const Home = () => {
  return (
    <Base>
      <Content>
        <Title>
          Ditate.me <Beta>Beta</Beta> <br />
          помогаем найти расписание медитаций
          в Санкт-Петербурге
        </Title>
        <Text>
          <Indigo>Динамические медитации</Indigo>, <Cyan>экстатик дэнс</Cyan>,
          шодхан, гвоздестояние, <Pink>тантра</Pink>, <Lime>гонг медитация</Lime>, даосские практики,
          <LightGreen>хиллинг массаж</LightGreen>, <LightBlue>банные церемонии</LightBlue> и остальные практики</Text>
        <ScheduleButton size="large" color="primary" variant="contained">🎯 Посмотреть расписание</ScheduleButton>
      </Content>
      <Footer>
        <Links>
          <Button size="medium" color="secondary" variant="contained">🎯 Связаться в телеграме</Button>
          <Button size="medium" color="secondary" variant="contained">👁 О проекте</Button>
          <Button size="medium" color="secondary" variant="contained">🤝 Партнёрство</Button>
        </Links>
        <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
      </Footer>
    </Base>
  );
};

export default Home;
