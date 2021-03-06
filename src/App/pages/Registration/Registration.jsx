import React, { useCallback } from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

import { useSnackbar } from 'notistack';
import Helmet from 'react-helmet';
import Vector from '../../../assets/VectorForRegistration.svg';
import Form from './Form';
import { createProfileRecord } from '../../airtable/services';
import useRouter from '../../hooks/useRouter';
import LoginToolBar from '../../components/LoginToolBar';

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
  gutterBottom: true,
})`
  white-space: nowrap;
`;

const Description = styled(Typography).attrs({
  variant: 'body2',
})``;

const Registration = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = useCallback(
    form => {
      createProfileRecord(form).then(() => {
        router.push('/');
        enqueueSnackbar('Профиль добавлен, скоро свяжемся с вами', {
          variant: 'success',
          autoHideDuration: 5000,
        });
      });
    },
    [enqueueSnackbar, router],
  );

  return (
    <>
      <LoginToolBar />
      <Base>
        <Container>
          <Header>
            <Title>Добавление профиля ✔</Title>
            <Description>
              Это быстрое размещение профиля. <br />
              Мы свяжемся с вами и уточним остальную информацию.
            </Description>
          </Header>
          <Form onSubmit={handleSubmit} />
        </Container>
      </Base>
      <Helmet>
        <meta name="description" content="Поиск практик и медитаций" />
        <title>Добавление профиля | ditate.me</title>
      </Helmet>
    </>
  );
};

export default Registration;
