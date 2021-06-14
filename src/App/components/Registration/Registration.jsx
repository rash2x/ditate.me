import React from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

import Vector from '../../../assets/VectorForRegistration.svg';
import RegistrationForm from './RegistrationForm';

const Base = styled.div`
  display: flex;
  
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  background-color: ${props => props.theme.palette.primary.main};
  height: 100vh;
  color: black;
`;

const Title = styled(Typography).attrs({
  variant: 'h1'
})`
  font-weight: 600;
`;

const Copyright = styled.div`
  position: absolute;
  top: 96.5vh;
`;

const Description = styled(Typography)`
  background: url(${Vector}) no-repeat;
  font-size: 14px;
  background-position: right 10% bottom 30%;
  margin-bottom: 33px;
  margin-top: 12px;
`;

const Group = styled.div`
  margin-top: 16px;
`;

const Registration = () => {

  const onSubmit = (array) => {
    console.log(array);
  };

  return (
    <Base>
      <Container>
        <Group>
          <Title>Добавление профиля ✔</Title>
          <Description>
            Это быстрое размещение профиля.
            Мы свяжемся с тобой и уточним остальную информацию
          </Description>

          <RegistrationForm onSubmit={onSubmit} />
          <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
        </Group>
      </Container>
    </Base>
  );
};

export default Registration;
