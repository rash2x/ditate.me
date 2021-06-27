import React from 'react';
import styled from 'styled-components';
import PracticeName from '../../components/PracticeName';

import { Container, Fab, Typography } from '@material-ui/core';
import { ArrowBack, Place, EventAvailable } from '@material-ui/icons';

import Contact from '../../components/Contact';
import { useRouter } from '../../hooks/useRouter';
import Teacher from '../../../assets/temp/teacher.jpg';

const BackgroundDiv = styled.div`
  min-height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.theme.spacing(2)}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 65.62%),
    url(${Teacher}) no-repeat center center/cover;
`;

const BackButton = styled(Fab).attrs({
  color: 'primary',
  size: 'medium',
})``;

const Subtitle = styled(Typography)`
  margin-top: ${props => props.theme.spacing(1)}px;
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

const Price = styled(Typography)`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  background: rgba(21, 22, 19, 1);
`;

const Location = styled(Typography)`
  display: flex;
  margin: ${props => props.theme.spacing(3)}px 0;
  .MuiSvgIcon-root {
    margin-right: ${props => props.theme.spacing(3)}px;
  }
`;

const PracticeDetails = () => {
  const router = useRouter();

  const handleClick = () => {
    router.history.goBack();
  };

  return (
    <div>
      <BackgroundDiv>
        <BackButton onClick={handleClick}>
          <ArrowBack />
        </BackButton>
        <div>
          <PracticeName />
          <Subtitle variant="subtitle2" component="h2">
            Даосские практики с Константином Сухановым
          </Subtitle>
        </div>
      </BackgroundDiv>
      <Container>
        <Info>
          <Date variant="subtitle2" component="span">
            <EventAvailable />
            Сегодня в 18:00
          </Date>
          <Price variant="subtitle2" component="span">
            1000 ₽
          </Price>
        </Info>
        <Location>
          <Place /> Конюшенная пл. 2В, 3 этаж, помещение 27
        </Location>
        <Contact />
      </Container>
    </div>
  );
};

export default PracticeDetails;
