import React, { useContext } from 'react';

import styled from 'styled-components';
import { Chip, Container, fade, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../airtable/context';

import instagramLogo from '../../assets/icons8-instagram.svg';
import { getPracticeById } from '../airtable/services';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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


const Logo = styled(Typography)`
  color: white;
  font-size: 1.6rem;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background: ${props => props.theme.palette.background.paper};
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
