import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { Chip, Container, Fab, fade, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../../airtable/context';
import InstagramIcon from '../../../assets/instagram-icon.svg';
import HoldingHands from '../../../assets/hands/holding-hands.svg';

import { getPracticeById, getTeacherById } from '../../airtable/services';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useRouter } from '../../hooks/useRouter';
import Contact from '../../components/Contact';

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
`;

const BackButton = styled(Fab).attrs({
  color: 'primary',
  size: 'medium'
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
  variant: 'h1'
})`
  font-size: 2rem;
  margin-top: 20px;
`;
const Description = styled(Typography).attrs({
  variant: 'body2'
})`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Instagram = styled(Button).attrs({
  size: 'small'
})`
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightMedium};
  
  img {
    margin-right: 4px;
  }
`;

const StyledContact = styled(Contact)`
  margin-top: 32px;
`

const Profile = () => {
  const [state, dispatch] = useContext(AirtableContext);
  const [currentTeacher, setCurrentTeacher] = useState(null)
  const router = useRouter();

  const teacherId = router.query.teacherId;

  useEffect(() => {
    setCurrentTeacher(getTeacherById(teacherId, state.teachers))
  }, [dispatch, state.teachers, teacherId]);

  return currentTeacher ? (
    <Base>
      <BackButton component={Link} to={'/'}>
        <ArrowBack />
      </BackButton>
      <Info>
        <Image src={currentTeacher.image} alt={''} />
        <Name>{currentTeacher.name}</Name>
        <Instagram component={'a'} href={currentTeacher.instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} width="24px" alt="In" />
          {currentTeacher.instagram}
        </Instagram>
        <Description>{currentTeacher.description}</Description>
      </Info>

      <PracticeList>
        {currentTeacher.practiceIds.map(practiceId => {
          const practice = getPracticeById(practiceId, state.practices);

          return practice && <PracticeChip key={practiceId} style={{
            color: practice.color,
            backgroundColor: fade(practice.color, 0.12)
          }} label={practice.name} />;
        })}
      </PracticeList>

      <StyledContact hands={HoldingHands} contact={{
        type: 'telegram',
        value: currentTeacher.telegram
      }} />
    </Base>
  ) : null;
};

export default Profile;
