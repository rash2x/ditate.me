import React, {useContext, useEffect} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import {DispatchContext, StateContext} from "../airtable/context";
import {setTeachers} from "../airtable/reducer";
import {airtableBase} from "./Teachers";
import {Button, Typography} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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

const TeacherInfo = (props) => {

    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const teacherId = props.match.params.teacherId

    useEffect(() => {
        airtableBase('Teachers')
            .select({
                view: 'Grid view'
            })
            .eachPage((records, fetchNextPage) => {
                dispatch(setTeachers(records))
                fetchNextPage();
            })
    }, []);

    return (
        <>
            {state.teachers && state.teachers.map(item => {
                if (item.id === teacherId) {
                    const imageUrl = item.fields['Avatar'][0].thumbnails.large.url
                    const instagram = item.fields.Instagram
                    const name = item.fields.Name

                    return (
                        <Base key={item.id}>
                            <Name>{name}</Name>
                            <Image src={imageUrl} alt={""}/>
                            <Grid style={{marginTop: "15px", marginBottom: "10px", textAlign:"center"}} container spacing={1}>
                                <Grid item xs={4} sm={3}>
                                    <Box style={{borderRadius:"3px", color:"black"}} bgcolor="primary.main" color="secondary.contrastText" p={0.3}>
                                        secondary.main
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={3}>
                                    <Box style={{borderRadius:"3px"}} bgcolor="error.main" color="error.contrastText" p={0.3}>
                                        error.main
                                    </Box>
                                </Grid>
                                <Grid item xs={4} sm={3}>
                                    <Box style={{borderRadius:"3px"}} bgcolor="info.main" color="info.contrastText" p={0.3}>
                                        info.main
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button style={{marginTop:"10px", background: "gray", color: "white"}}
                                    variant="contained"
                                    onClick={() => window.location.href = `https://www.instagram.com/${instagram}`}>
                                Instagram
                            </Button>
                        </Base>
                    )
                }
            })
            }
        </>
    );
};

export default withRouter(TeacherInfo)