import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Container, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import vector from '../../../assets/Vector.svg';

const Title = styled(Typography).attrs({
  variant: 'h2'
})``;

const Description = styled(Typography)`
  background: url(${vector}) no-repeat;
  font-size: 14px;
  padding: 8px 70px 0 0;
  background-position: right 10% bottom 30%;
`;

const RegistrationPromo = () => {
  return (
    <Paper style={{ backgroundColor: '#191A1C', marginTop: '40px' }}>
      <Container style={{ padding: '16px' }}>
        <Title>Проводите практики ?</Title>
        <Description>
          Мы можем распространить твои знания среди тысячи учеником, ищущих тебя
          <strong> прямо здесь и сейчас</strong>
        </Description>
      </Container>

      <Button color={'primary'}
              style={{ width: '100%', textTransform: 'none', padding: '0 20px 20px 0', fontSize: '14px' }}
              component={Link} to="/registration">
        <AddCircleIcon style={{ marginRight: '14px' }} />
        Добавьте лишь свой профиль
      </Button>
    </Paper>
  );
};

export default RegistrationPromo;
