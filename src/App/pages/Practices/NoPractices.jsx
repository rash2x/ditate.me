import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import HomeToolbar from '../../components/HomeToolbar';
import NavigationBar from '../../components/NavigationBar';

import Hands from '../../../assets/hands/noPracticeHands.svg';
import Contact from '../../components/Contact';

const Base = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
  padding-bottom: ${props => props.theme.mixins.toolbar.minHeight}px;
`;

const Content = styled.div`
  text-align: center;
  margin: 0 auto ${props => props.theme.spacing(10)}px;
`;

const Title = styled(Typography).attrs({ variant: 'h2' })`
  margin-top: ${props => props.theme.spacing(3)}px;
  margin-bottom: ${props => props.theme.spacing(2)}px;
`;

const SubTitle = styled(Typography).attrs({ variant: 'subtitle3' })``;

const StyledContact = styled(Contact)`
  margin: 0 auto;
`;

const NoPractices = () => (
  <>
    <HomeToolbar />
    <Base>
      <Content>
        <img src={Hands} alt="Hands" />
        <Title>Практики закончились</Title>
        <SubTitle>Но мы работаем над их добавлением ☺️️️</SubTitle>
      </Content>
      <StyledContact
        contact={{
          type: 'telegram',
          value: 'rash2x',
        }}
        description="Если вы ждете что-то конкретное, напишите нам и мы постараемся найти тичеров"
      />
    </Base>

    <NavigationBar />
  </>
);
export default NoPractices;
