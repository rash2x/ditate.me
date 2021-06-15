import React, { useContext } from 'react';

import styled from 'styled-components';
import { Avatar, Chip, Container, fade } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../airtable/context';

import instagramLogo from '../../assets/icons8-instagram.svg';
import { getPracticeById } from '../airtable/services';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
`;

const Image = styled(Avatar)`
  width: ${props => props.theme.spacing(15)}px;
  height: ${props => props.theme.spacing(15)}px;
  margin: 20px auto 0 auto;
const Image = styled.img`
  width: 240px;
  border-radius: 50%;
  margin: 0 auto;
`;

const PracticeChip = styled(Chip)`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  height: 24px;

  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeightBold};

  span {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PracticeList = styled.div`
  margin-top: ${props => props.theme.spacing(3)}px;
  display: flex;
  justify-content: center;
`;

const Group = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const ButtonLink = styled(Button)`
  background: ${props => props.theme.palette.background.paper};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing(3)}px;
  width: 100%;
`;

const Links = styled.div`
  max-width: 335px;
  margin: 0 auto;
  width: 100%;
`;

const TeacherInfo = () => {
  const [state] = useContext(AirtableContext);
  const currentTeacher = state.currentTeacher;

  return currentTeacher ? (
    <Base>
      <Image src={currentTeacher.image} alt={''} />
      <PracticeList>
        {currentTeacher.practiceIds.map(practiceId => {
          const practice = getPracticeById(practiceId, state.practices);

          return <PracticeChip key={practiceId} style={{
            color: practice.color,
            backgroundColor: fade(practice.color, 0.12)
          }} label={practice.name} />
        })}
      </PracticeList>
      <StyledButton component={'a'} href={currentTeacher.instagramUrl} target="_blank">
        <img src={instagramLogo} width="25px" alt="" />
        <Logo>Instagram</Logo>
      </StyledButton>
    </Base>
  ) : null;
};

export default TeacherInfo;
