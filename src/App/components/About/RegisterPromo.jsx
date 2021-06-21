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
  font-size: 14px;
  padding: 8px 70px 10px 0;
  background: url(${vector}) no-repeat right 10% bottom 60%;
`;

const Base = styled(Paper)`
  margin-top: ${props => props.theme.spacing(5)}px;
  padding-top: ${props => props.theme.spacing(2)}px;
  padding-bottom: ${props => props.theme.spacing(2)}px;
  background: ${props => props.theme.palette.background.paper};
`;

const RegisterPromo = () => {
  return (
    <Base>
      <Container>
        <Title>Проводите практики?</Title>
        <Description>
          Мы можем распространить твои знания среди тысячи учеником, ищущих тебя
          <strong> прямо здесь и сейчас</strong>
        </Description>
        <Button color="primary" size="small"
                component={Link} to="/registration" style={{ textTransform: 'none' }}>
          <AddCircleIcon style={{ marginRight: '14px' }} />
          Добавьте лишь свой профиль
        </Button>

      </Container>
    </Base>
  );
};

export default RegisterPromo;
