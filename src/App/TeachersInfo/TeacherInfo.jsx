import React from 'react'

import styled from 'styled-components';
import {Typography} from "@material-ui/core";

import instagramLogo from "../../assets/icons8-instagram.svg"

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

const Button = styled.button`
  margin-top: 1em;
  background: #707070;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 5px;
  box-shadow: 0 0 3px #707070;
`;

const Logo = styled(Typography)`
  color: white;
  font-size: 1.7rem;
  position: relative;
  top: 50%;
  margin-top: -0.7em;
`;

function TeacherInfo({imageUrl, name, instagram}) {

    let click = () => window.open(`http://instagram.com/${instagram}`,'_blank')

    return (
        <Base>
            <Name>{name}</Name>
            <Image src={imageUrl} alt={""}/>
            <Button onClick={click}>
                <img src={instagramLogo} width="30px" alt="" />
                <Logo>Instagram</Logo>
            </Button>
        </Base>
    )
}

export default TeacherInfo
