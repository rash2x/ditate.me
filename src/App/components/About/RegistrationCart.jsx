import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import vector from "../../../assets/Vector.svg"

const Base = styled.div`
  display: grid;
  justify-content: center;
  background: #2f3237;
  color: white;
  border-radius: 4px;
`;

const TextCase = styled.div`
  padding: 16px 16px 5px 16px;
  display: grid;
  grid-template-columns: 75% 20%;
`

const Title = styled(Typography).attrs({
  variant: 'h2'
})`
  padding-bottom: 10px;
  font-size: 18px;
`;

const Text = styled(Typography).attrs({
  variant: 'p'
})`
  font-size: 14px;
`;

const Weight = styled(Typography).attrs({
  variant: 'p'
})`
  font-weight: 600;
`;

const LinkStyle =styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`

const StyledButton = styled(Button)`
  background: none;
  padding: 10px 50px 10px 0;
  box-shadow: none;
  color: ${props => props.theme.palette.primary.main};
  font-size: 14px;
  height: 50px;
  width: 100%;
  display: flex;
  text-transform: none;
`;

const Plus = styled(AddIcon)`
  color: #2f3237;
  background: ${props => props.theme.palette.primary.main};
  border-radius: 50%;
  font-size: 18px;
  margin-right: 10px;
`;

const ImageBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 70%;
`

const RegistrationCart = () => {
  return (
    <Base>
      <TextCase>
        <Text>
          <Title>
            Проводите практики ?
          </Title>
          Мы можем распространить твои знания среди тысячи учеником, ищущих тебя<br />
          <Weight>прямо здесь и сейчас</Weight>
        </Text>
        <ImageBar>
          <img src={vector} width="48px" alt="" />
        </ImageBar>
      </TextCase>
      <LinkStyle to="/login">
        <StyledButton>
          <Plus/>
          <Text>Добавьте лишь свой профиль</Text>
        </StyledButton>
      </LinkStyle>
    </Base>
  )
};

export default RegistrationCart;
