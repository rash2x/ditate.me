import React from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

import Vector from '../../../assets/VectorForRegistration.svg';
import RegistrationForm from './RegistrationForm';

const Base = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 30px;
  z-index: 1;
  position: absolute;
  color: black;
  width: 100%;
  left: 0;
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

const BackgroundLayout = styled.div`
  background: ${props => props.theme.palette.primary.main};
  width: 100%;
  height: 100%;
  left: 0;
  position: fixed;
`;

const Copyright = styled.div`
  position: absolute;
  top: 90vh
`;

const Description = styled(Typography)`
  background: url(${Vector}) no-repeat;
  font-size: 14px;
  padding: 18px 90px 0 0;
  background-position: right 10% bottom 30%;
`;

const Registration = () => {

  const onSubmit = (array) => {
    console.log(array);
  };

  return (
    <>
      <Base>
        <Container style={{ padding: '21px' }}>
          <Title>Добавление профиля ✔</Title>
          <Description>
            Это быстрое размещение профиля.
            Мы свяжемся с тобой и уточним остальную информацию
          </Description>

          <RegistrationForm onSubmit={onSubmit} />
          <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
        </Container>
      </Base>
      <BackgroundLayout />
    </>
  );
};

export default Registration;
