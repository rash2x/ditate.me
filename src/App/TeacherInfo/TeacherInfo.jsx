import React, { useContext } from 'react';

import styled from 'styled-components';
import { Chip, fade, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { AirtableContext } from '../airtable/context';

import instagramLogo from '../../assets/icons8-instagram.svg';

const Base = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 30px;
`;

const Image = styled.img`
  width: 38%;
  border-radius: 50%;
  margin: 0 auto;
`;

const Logo = styled(Typography)`
  color: white;
  font-size: 1.6rem;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background: #2f3237;
  border-radius: 3px;
  border: 1px black;
  padding: 7px;
  box-shadow: none;
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

const TeacherInfo = () => {
  const [state] = useContext(AirtableContext);
  const currentTeacher = state.currentTeacher;

  return currentTeacher ? (
    <Base>
      <Image src={currentTeacher.imageUrl} alt={''} />
      <PracticeList>
        <PracticeChip style={{
          color: currentTeacher.practicesColor,
          backgroundColor: fade(currentTeacher.practicesColor, 0.12)
        }} label={currentTeacher.practicesName} />
      </PracticeList>
      <StyledButton component={'a'} href={currentTeacher.instagram} target="_blank">
        <img src={instagramLogo} width="25px" alt="" />
        <Logo>Instagram</Logo>
      </StyledButton>
    </Base>
  ) : null;
};

export default TeacherInfo;
