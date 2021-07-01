import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from '../hooks/useRouter';
import { AirtableContext } from '../airtable/context';
import { getEventById } from '../airtable/services';

import { Place, EventAvailable, Close, Paid } from '@material-ui/icons';
import { Dialog, IconButton, Paper, Typography } from '@material-ui/core';

import Contact from './Contact';
import PracticeBadge from './PracticeBadge';

import Hands from '../../assets/hands/Hands.svg';
import { getPriceValue } from "../helpers/getPriceValue";

const Base = styled(Dialog)`
  .MuiPaper-root {
    padding: ${props => props.theme.spacing(2.5, 2, 2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;


const CloseButton = styled(IconButton).attrs({
  color: 'inherit'
})`
  background: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Header = styled.header`
  text-align: center;
`;

const Title = styled(Typography).attrs({ variant: 'h2', component: 'h1' })`
  margin-top: ${props => props.theme.spacing(2)}px;
  padding: 0 16px;
`;

const Date = styled(Typography).attrs({ variant: 'subtitle1', component: 'div', color: 'primary' })``;
const Price = styled(Typography).attrs({ variant: 'subtitle1', component: 'div', })``;
const Teacher = styled(Typography).attrs({ variant: 'subtitle1', component: 'div', })``;
const Location = styled(Typography).attrs({ variant: 'subtitle1', component: 'div', })``

const Avatar = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const Info = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spacing(4)}px;

  > div {
    display: flex;
    
    + div {
      margin-top: 16px;
    }
  }
  
  .MuiSvgIcon-root,
  ${Avatar} {
    margin-right: 20px;
  }
`;

const StyledContact = styled(Contact)`
  background: ${props => props.theme.palette.background.default};
  margin: 32px -12px -12px;
`;

const PracticeDialog = ({ ...rest }) => {
  const router = useRouter();
  const [state] = useContext(AirtableContext);
  const [currentEvent, setCurrentEvent] = useState(null);

  const eventId = router.query.eventId;

  useEffect(() => {
    setCurrentEvent(getEventById(eventId, state.events))
  }, [state.events, eventId]);

  const handleClick = () => {
    if (router.history.length === 1) {
      router.push('/');
    } else {
      router.history.goBack();
    }
  };

  return currentEvent ? (
    <Base {...rest}>
      <CloseButton onClick={handleClick}>
        <Close />
      </CloseButton>
      <Header>
        <PracticeBadge name={currentEvent.practiceName} />
        <Title>{currentEvent.name}</Title>
      </Header>
      <Info>
        <Teacher>
          {currentEvent.teacherImage && <Avatar src={currentEvent.teacherImage} />}
          {currentEvent.teacherName}
        </Teacher>
        <Price>
          <Paid />
          {getPriceValue(currentEvent.price)}
        </Price>
        <Date>
          <EventAvailable />
          {currentEvent.startDate}
        </Date>
        <Location>
          <Place />
          {currentEvent.location}
        </Location>
      </Info>

      <StyledContact
        hands={Hands}
        contact={{
          type: currentEvent.teacherTelegram ? 'telegram' : 'instagram',
          value: currentEvent.teacherTelegram || currentEvent.teacherInstagram,
        }}
      />
    </Base>
  ) : null;
};

export default PracticeDialog;