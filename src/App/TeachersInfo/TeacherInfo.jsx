import React, { useContext } from 'react';

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
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

const PracticeItem = styled(Button)`
  padding: 3px;
  font-size: 1.3rem;
  border-radius: 5px;
  background: ${props => props.color};
`;

const Case = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const TeacherInfo = () => {
  const [state, dispatch] = useContext(AirtableContext);

  const currentTeacher = state.currentTeacher;

  let click = () => window.open(`http://instagram.com/${currentTeacher.instagram}`, '_blank');

  return currentTeacher ? (
    <Base>
      <Image src={currentTeacher.imageUrl} alt={''} />
      <Case>
        <PracticeItem color={currentTeacher.practicesColor}>{currentTeacher.practicesName}</PracticeItem>
      </Case>
      <StyledButton onClick={click}>
        <img src={instagramLogo} width="25px" alt="" />
        <Logo>Instagram</Logo>
      </StyledButton>
    </Base>
  ) : null;
};

export default TeacherInfo;
