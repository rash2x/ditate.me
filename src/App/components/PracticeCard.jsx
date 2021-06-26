import React from 'react';
import styled from 'styled-components';

import PracticeName from './PracticeName';

import Teacher from '../../assets/temp/teacher.jpg';
import TeacherIcon from '../../assets/temp/teacher-icon.jpg';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core';

const Base = styled(Card)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
  max-width: 480px;
`;

const Thumbnail = styled(CardMedia)`
  display: flex;
  flex-direction: column-reverse;
  min-height: 375px;
  padding: ${props => props.theme.spacing(2)}px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.img`
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

// Is it right to write padding like that?
const Price = styled(Typography)`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  background: rgba(21, 22, 19, 1);
`;

const PracticeCard = () => {
  return (
    <Base>
      <CardActionArea>
        <Wrapper>
          <Thumbnail image={Teacher} title="Contemplative Reptile" />
          {/* variant needs to be changed */}
          <PracticeName />
          <Avatar src={TeacherIcon} />
        </Wrapper>
        <Content>
          {/* subtitle2 makes font waight = 500 */}
          <Typography variant="subtitle2" component="h2">
            Даосские практики с Константином Сухановым
          </Typography>
          <Info>
            <Date variant="subtitle2" component="span">
              <EventAvailableIcon />
              Сегодня в 18:00
            </Date>
            <Price variant="subtitle2" component="span">
              1000 ₽
            </Price>
          </Info>
        </Content>
      </CardActionArea>
    </Base>
  );
};

export default PracticeCard;
