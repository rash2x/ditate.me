import React, { useContext, useEffect } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { AirtableContext } from '../../airtable/context';
import { setCurrentTeacher } from '../../airtable/reducer';
import { mapTeacher } from '../../airtable/mappers';

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
  margin-left: -45px;
`;

const TeacherLogo = () => {
  const [state, dispatch] = useContext(AirtableContext);
  const router = useRouter();

  const teacherId = router.query.teacherId;
  const currentTeacher = state.currentTeacher;

  useEffect(() => {
    dispatch(setCurrentTeacher(mapTeacher(teacherId, state)));
    /* TODO: we have to map all data inside of loading */
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [dispatch]);

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
