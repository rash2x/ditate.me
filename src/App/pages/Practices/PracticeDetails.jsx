import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from '../../hooks/useRouter';
import { getEventById, getTeacherById } from '../../airtable/services';
import { AirtableContext } from '../../airtable/context';

import { Container, Fab, Typography } from '@material-ui/core';
import { ArrowBack, Place, EventAvailable } from '@material-ui/icons';

import Contact from '../../components/Contact';
import PracticeBadge from '../../components/PracticeBadge';

import Hands from '../../../assets/hands/Hands.svg';
import Teacher from '../../../assets/temp/teacher.jpg';

const Base = styled.div``;

const Thumbnail = styled.div`
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

const TitleWrapper = styled.div``;

const Title = styled(Typography).attrs({ variant: 'body1' })`
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const Date = styled(Typography).attrs({ variant: 'subtitle2' })`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.palette.primary.main};

  .MuiSvgIcon-root {
    margin-right: ${props => props.theme.spacing(1)}px;
  }
`;

const Price = styled(Typography).attrs({ variant: 'subtitle2' })`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: ${props => props.theme.shape.borderRadiusSmall}px;
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
  const [state, dispatch] = useContext(AirtableContext);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [currentTeacherId, setCurrentTeacherId] = useState(null);

  const eventId = router.query.eventId;
  useEffect(() => {
    if (currentEvent !== undefined && currentEvent !== null) {
      currentEvent.teacherId.map(teacher => setCurrentTeacherId(teacher));
    }
  }, [currentEvent]);

  useEffect(() => {
    setCurrentEvent(getEventById(eventId, state.events));
  }, [dispatch, state.events, eventId]);

  useEffect(() => {
    setCurrentTeacher(getTeacherById(currentTeacherId, state.teachers));
  }, [dispatch, state.teachers, currentTeacherId]);

  const handleClick = () => {
    if (router.history.length === 1) {
      router.push('/');
    } else {
      router.history.goBack();
    }
  };

  return currentEvent && currentTeacher ? (
    <Base>
      <Thumbnail>
        <BackButton onClick={handleClick}>
          <ArrowBack />
        </BackButton>
        <TitleWrapper>
          <PracticeBadge name={currentEvent.name} />
          <Title component="h1">Даосские практики с Константином Сухановым</Title>
        </TitleWrapper>
      </Thumbnail>
      <Container>
        <Info>
          <Date component="span">
            <EventAvailable />
            {currentEvent.startDate}
          </Date>
          <Price component="span">{currentEvent.price} ₽</Price>
        </Info>
        <Location>
          <Place /> {currentEvent.location}
        </Location>
        <Contact
          hands={Hands}
          contact={{
            type: currentTeacher.telegram ? 'telegram' : 'instagram',
            value: currentTeacher.telegram || currentTeacher.instagram,
          }}
        ></Contact>
      </Container>
    </Base>
  ) : null;
};

export default PracticeDetails;
