import React from 'react'

import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import instagramLogo from '../../assets/icons8-instagram.svg'

const Base = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 10px;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 50%;
  margin: 5px auto;
  box-shadow: 0 0 3px black;
`;

const Name = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-top: 5px;
`;

const Logo = styled(Typography)`
  color: white;
  font-size: 1.8rem;
`;

const StyledButton = withStyles({
  root: {
    marginTop: '10px',
    background: 'dimgray',
    borderRadius: '5px',
    border: 0,
    padding: '10px',
    boxShadow: '0 0 3px dimgray',
  }
})(Button);

const TeacherInfo = ({ imageUrl, name, instagram }) => {

  let click = () => window.open(`http://instagram.com/${instagram}`, '_blank')

  return (
    <Base>
      <Name>{name}</Name>
      <Image src={imageUrl} alt={''} />
      <StyledButton onClick={click}>
        <img src={instagramLogo} width="30px" alt="" />
        <Logo>Instagram</Logo>
      </StyledButton>
    </Base>
  )
}

export default TeacherInfo
