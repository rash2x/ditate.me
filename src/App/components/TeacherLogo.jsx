import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from '../hooks/useRouter';
import { Link } from 'react-router-dom';

import { IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import styled from 'styled-components';

import { AirtableContext } from '../airtable/context';
import { setCurrentTeacher } from '../airtable/reducer';
import { mapTeacher } from '../airtable/mappers';


const Base = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const Name = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  position: relative;
  margin-left: -25px;
`;

const BackBtn = styled(ArrowBack)`
  position: absolute;
`;

const TeacherLogo = () => {

  const [state, dispatch] = useContext(AirtableContext);
  const router = useRouter();

  const teacherId = router.query.teacherId;
  const currentTeacher = state.currentTeacher;

  useEffect(() => {
    dispatch(setCurrentTeacher(mapTeacher(teacherId, state)));
  }, [dispatch]);

  return (
    <>
      <Link to="/">
        <IconButton>
          <BackBtn />
        </IconButton>
      </Link>
      <Base>
        <Name>{currentTeacher ? currentTeacher.name : null}</Name>
      </Base>
    </>
  );
};

export default TeacherLogo;
