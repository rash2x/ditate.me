import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import PracticeName from '../../components/PracticeName/PracticeName';

import Teacher from '../../../assets/temp/teacher.jpg';
import TeacherIcon from '../../../assets/temp/teacher-icon.jpg';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import { Icon } from '@material-ui/core';

const StyledCard = styled(Card)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;

const CardImage = styled(CardMedia)`
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

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledCardContent = styled(CardContent)`
  padding: 8px 16px;
`;

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const DateBase = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.palette.primary.main};
`;

const Date = styled(Typography)`
  margin-left: ${props => props.theme.spacing(1)}px;
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
    <StyledCard>
      <CardActionArea>
        <CardImage image={Teacher} title="Contemplative Reptile">
          {/* variant needs to be changed */}
          <Wrapper>
            <PracticeName />
            <Image src={TeacherIcon} />
          </Wrapper>
        </CardImage>
        <StyledCardContent>
          {/* subtitle2 makes font waight = 500 */}
          <Typography variant="subtitle2" component="h2">
            Даосские практики с Константином Сухановым
          </Typography>
          <Base>
            <DateBase>
              <Icon>
                <EventAvailableIcon />
              </Icon>
              <Date variant="subtitle2" component="span">
                Сегодня в 18:00
              </Date>
            </DateBase>
            <Price variant="subtitle2" component="span">
              1000 ₽
            </Price>
          </Base>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default PracticeCard;
