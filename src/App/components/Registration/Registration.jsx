import React, { useContext } from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

import Vector from '../../../assets/VectorForRegistration.svg';
import RegistrationForm from './RegistrationForm';
import { AirtableContext } from '../../airtable/context';
import { addProfile, getAllPracticesTeacherId } from '../../airtable/services';

const Base = styled.div`
  display: flex;

  padding-top: ${props => props.theme.mixins.toolbar.minHeight + 16}px;
  background-color: ${props => props.theme.palette.primary.main};
  height: 100vh;
  color: black;
`;

const Header = styled.header`
  background: url(${Vector}) no-repeat right bottom;
  padding-right: 80px;
  margin-bottom: 16px;
`;

const Title = styled(Typography).attrs({
  variant: 'h1',
  gutterBottom: true
})`
  white-space: nowrap;
`;

const Description = styled(Typography).attrs({
  variant: 'body2'
})``;

const Registration = () => {
  const [state,] = useContext(AirtableContext);

  const practiceNames = state.practices?.map(item => item.name);

  const onSubmit = (array) => {
    addProfile(getAllPracticesTeacherId(array, state));
  };

  return (
    <Base>
      <Container>
        <Header>
          <Title>Добавление профиля ✔</Title>
          <Description>
            Это быстрое размещение профиля. <br/>
            Мы свяжемся с вами и уточним остальную информацию.
          </Description>
        </Header>
        <RegistrationForm onSubmit={onSubmit} array={practiceNames} />
      </Container>
    </Base>
  );
};

export default Registration;
