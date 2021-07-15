import React from 'react';
import { Link } from 'next/link';

import styled from 'styled-components';
import { Container, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import vector from '../../../public/assets/Vector.svg';

const Title = styled(Typography).attrs({
  variant: 'h2',
})``;

const Description = styled(Typography)`
  font-size: 1.4rem;
  padding: 8px 70px 10px 0;
  background: url(${vector}) no-repeat right 10% bottom 60%;
`;

const Base = styled(Paper)`
  margin-top: ${props => props.theme.spacing(5)}px;
  padding-top: ${props => props.theme.spacing(2)}px;
  padding-bottom: ${props => props.theme.spacing(2)}px;
  background: ${props => props.theme.palette.background.paper};
`;

const RegisterPromo = () => (
  <Base>
    <Container>
      <Title>Проводите практики?</Title>
      <Description>
        Добавьте свой профиль, чтобы тысячи учеников смогли найти вас{' '}
        <strong>прямо здесь и сейчас</strong>
      </Description>
      <Button
        color="primary"
        size="small"
        component={Link}
        to="/registration"
        style={{ textTransform: 'none' }}
      >
        <AddCircleIcon style={{ marginRight: '14px' }} />
        Добавьте лишь свой профиль
      </Button>
    </Container>
  </Base>
);

export default RegisterPromo;
