import React from 'react';

import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

import Logo from '../Header/Logo';
import RegistrationPromo from './RegistrationPromo';

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
  variant: 'h2'
})``;

const Text = styled(Typography).attrs({
  variant: 'h2'
})`
  margin-top: ${props => props.theme.spacing(4)}px;
`;

const Indigo = styled.span`color: #651FFF`;
const Cyan = styled.span`color: #00B2CC`;
const Pink = styled.span`color: #d81b60`;
const Orange = styled.span`color: #fb8c00`;
const LightGreen = styled.span`color: #43a047`;
const LightBlue = styled.span`color: #039be5`;

const Content = styled.div``;

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

  return (
    <Base>
      <Content>
        <Title>
          <Logo inverse={true} /> <br />
          Мы сообщество, медитирующих людей 👁
        </Title>
        <Text>
          <Indigo>Динамические медитации</Indigo>, <Cyan>экстатик дэнс</Cyan>,
          шодхан, гвоздестояние, <Pink>тантра</Pink>, <Orange>гонг медитация</Orange>, даосские практики,
          <LightGreen>хиллинг массаж</LightGreen>, <LightBlue>банные церемонии</LightBlue> и остальные практики
        </Text>
        <RegistrationPromo />

      </Content>

      <Footer>
        <Links>
          <Button size="medium" color="secondary" variant="contained" component={'a'} href={'https://t.me/rash2x'}
                  target={'_blank'}>🎯
            Связаться в телеграме</Button>
        </Links>
        <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
      </Footer>
    </Base>
  );
};

export default About;
