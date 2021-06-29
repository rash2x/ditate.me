import React from 'react';
import styled from 'styled-components';

import PracticeBadge from './PracticeBadge';

import Teacher from '../../assets/temp/teacher.jpg';
import TeacherIcon from '../../assets/temp/teacher-icon.jpg';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Base = styled(Card)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
  max-width: 480px;
  display: block;
  text-decoration: none;
`;

const Thumbnail = styled(CardMedia)`
  display: flex;
  flex-direction: column-reverse;
  min-height: 375px;
  padding: ${props => props.theme.spacing(2)}px;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .MuiTypography-h2 {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
`;

const Title = styled(Typography).attrs({ variant: 'subtitle2' })``;

const Avatar = styled.img`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Content = styled(CardContent)`
  padding: ${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const Date = styled(Typography)`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.palette.primary.main};

  .MuiSvgIcon-root {
    margin-right: ${props => props.theme.spacing(1)}px;
  }
`;

const Price = styled(Typography).attrs({
  variant: 'subtitle2',
})`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  background: rgba(21, 22, 19, 1);
`;

const PracticeCard = ({ id, name, price, startDate }) => {
  return (
    <Base component={Link} to={`/event/${id}`}>
      <CardActionArea>
        <Wrapper>
          <Thumbnail image={Teacher} />
          <PracticeBadge name={name} />
          <Avatar src={TeacherIcon} />
        </Wrapper>
        <Content>
          <Title component="h2">Даосские практики с Константином Сухановым</Title>
          <Info>
            <Date component="span">
              <EventAvailableIcon />
              {startDate}
            </Date>
            <Price>{price} ₽</Price>
          </Info>
        </Content>
      </CardActionArea>
    </Base>
  );
};

export default PracticeCard;
