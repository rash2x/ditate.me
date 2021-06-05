import React from 'react'

import styled from 'styled-components';
import {Button, Typography} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import instagramLogo from "../../assets/icons8-instagram.svg"

const Base = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 10px;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 50%;
  margin: 0 auto;
`;

const Name = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

function TeacherInfo({imageUrl, name, instagram}) {

    return (
        <Base>
            <Name>{name}</Name>
            <Image src={imageUrl} alt={""}/>
            <Grid style={{marginTop: "15px", marginBottom: "10px", textAlign:"center", display:"flex", justifyContent: "center"}}
                container spacing={1}>
                <Grid item xs={4} sm={3}>
                    <Box style={{borderRadius:"3px", color:"black"}} bgcolor="primary.main" color="secondary.contrastText" p={0.3}>
                        {name}
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Box style={{borderRadius:"3px"}} bgcolor="error.main" color="error.contrastText" p={0.3}>
                        {name}
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Box style={{borderRadius:"3px"}} bgcolor="info.main" color="info.contrastText" p={0.3}>
                        {name}
                    </Box>
                </Grid>
            </Grid>
            <Button style={{marginTop:"10px", background: "gray", color: "white", display:"flex"}}
                                        variant="contained"
                                        component="a" target="_blank" href={`https://www.instagram.com/${instagram}`}>
                <img src={instagramLogo} width="30px" alt="" />
                <span>Instagram</span>
            </Button>
        </Base>
    )
};

export default TeacherInfo
