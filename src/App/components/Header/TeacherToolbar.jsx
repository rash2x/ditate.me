import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { useRouter } from '../../hooks/useRouter';
import { AirtableContext } from '../../airtable/context';
import { setCurrentTeacher } from '../../airtable/reducer';
import { getTeacherById } from '../../airtable/services';

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

const TeacherLogo = () => {
  const [state, dispatch] = useContext(AirtableContext);
  const router = useRouter();

  const teacherId = router.query.teacherId;
  const currentTeacher = state.currentTeacher;

  useEffect(() => {
    dispatch(setCurrentTeacher(getTeacherById(teacherId, state.teachers)));
  }, [dispatch, state.teachers, teacherId]);

  return (
    <Toolbar>
      <IconButton component={Link} to="/">
        <ArrowBack />
      </IconButton>
      <Base>
        <Name>{currentTeacher && currentTeacher.name}</Name>
      </Base>
    </Toolbar>
  );
};

export default TeacherLogo;
