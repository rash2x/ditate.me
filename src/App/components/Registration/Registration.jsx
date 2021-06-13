import React from 'react';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';

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

const TextCase = styled.div`
  display: grid;
  grid-template-columns: 250px 60px;
`;

const Title = styled(Typography)`
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 13px;
`;

const ImageBar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -30px;
`;

const BackgroundLayout = styled.div`
  background: ${props => props.theme.palette.primary.main};
  width: 100%;
  height: 100%;
  left: 0;
  position: fixed;
`;

const Copyright = styled.div`
  margin-top: 25%;
`;

const Registration = () => {

  const onSubmit = (array) => {
    console.log(array);
  };

  return (
    <>
      <Base>
        <Title>Добавление профиля ✔</Title>
        <TextCase>
          <Text>
            Это быстрое размещение профиля.
            Мы свяжемся с тобой и уточним остальную информацию
          </Text>
          <ImageBar>
            <img src={Vector} width="60px" alt="" />
          </ImageBar>
        </TextCase>
        <RegistrationForm onSubmit={onSubmit} />
        <Copyright>2021 &copy; <strong>#Минибудды</strong> обучают 👌</Copyright>
      </Base>
      <BackgroundLayout />
    </>
  );
};

export default Registration;
