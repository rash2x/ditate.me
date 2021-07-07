import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { Chip, Container, fade, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { ArrowBack } from '@material-ui/icons';
import { Helmet } from 'react-helmet';
import { AirtableContext } from '../../airtable/context';
import InstagramIcon from '../../../assets/instagram-icon.svg';
import HoldingHands from '../../../assets/hands/holding-hands.svg';

import { getEventById, getPracticeById, getTeacherById } from '../../airtable/services';
import useRouter from '../../hooks/useRouter';
import Contact from '../../components/Contact';
import PracticeCard from '../../components/PracticeCard';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const Image = styled.img`
  width: 120px;
  border-radius: 50%;
  margin: 20px auto 0 auto;
`;

const PracticeChip = styled(Chip)`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  height: 24px;
  margin-left: 8px;
  margin-top: 8px;
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};

  span {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PracticeList = styled.div`
  margin-top: ${props => props.theme.spacing(2)}px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const EventsList = styled.div`
  margin-top: ${props => props.theme.spacing(2)}px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const CommingEvents = styled(Typography).attrs({ variant: 'h2' })`
  margin-top: ${props => props.theme.spacing(4)}px;
`;

const BackButton = styled(ArrowBack).attrs({
  size: 'medium',
})`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Info = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Name = styled(Typography).attrs({
  variant: 'h1',
})`
  font-size: 2rem;
  margin-top: 20px;
`;
const Description = styled(Typography).attrs({
  variant: 'body2',
})`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Instagram = styled(Button).attrs({
  size: 'small',
})`
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightMedium};

  img {
    margin-right: 4px;
  }
`;

const StyledContact = styled(Contact)`
  margin-top: 32px;
`;

const Copyright = styled.div`
  margin: ${props => props.theme.spacing(2)}px auto;
`;

const Profile = () => {
  const [state, dispatch] = useContext(AirtableContext);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [events, setEvents] = useState([]);
  const router = useRouter();

  const { teacherId } = router.query;

  useEffect(() => {
    setCurrentTeacher(getTeacherById(teacherId, state.teachers));
    if (currentTeacher) {
      currentTeacher.events.map(eventId => setEvents(getEventById(eventId, state.events)));
    }
  }, [dispatch, state.teachers, teacherId]);

  const handleClick = () => {
    if (router.history.length === 1) {
      router.push('/');
    } else {
      router.history.goBack();
    }
  };

  return currentTeacher ? (
    <Base>
      <BackButton onClick={handleClick} />
      <div>
        <Info>
          <Image src={currentTeacher.image} alt="" />
          <Name>{currentTeacher.name}</Name>
          <Instagram
            component="a"
            href={currentTeacher.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} width="24px" alt="In" />
            {currentTeacher.instagram}
          </Instagram>
          <Description>{currentTeacher.description}</Description>
        </Info>

        <PracticeList>
          {currentTeacher.practiceIds.map(practiceId => {
            const practice = getPracticeById(practiceId, state.practices);

            return (
              practice && (
                <PracticeChip
                  key={practiceId}
                  style={{
                    color: practice.color,
                    backgroundColor: fade(practice.color, 0.12),
                  }}
                  label={practice.name}
                />
              )
            );
          })}
        </PracticeList>

        {currentTeacher.events && <CommingEvents>Ближайшие практики</CommingEvents> && (
          <EventsList>
            {new Date(events.startDate).getTime() > new Date().getTime() && (
              <PracticeCard key={eventId} {...events} />
            )}
          </EventsList>
        )}
        <StyledContact
          hands={HoldingHands}
          contact={{
            type: currentTeacher.telegram ? 'telegram' : 'instagram',
            value: currentTeacher.telegram || currentTeacher.instagram,
          }}
          description={
            <>
              Сообщите, пожалуйста, что вы нашли меня на <span>ditate.me 🙏</span>
            </>
          }
        />
      </div>
      <Copyright>
        2021 &copy; <strong>#Минибудды</strong> обучают 👌
      </Copyright>
      <Helmet>
        <meta name="description" content={currentTeacher.description} />
        <title>
          {currentTeacher.name} (@{currentTeacher.instagram}) | ditate.me
        </title>
      </Helmet>
    </Base>
  ) : null;
};

export default Profile;
