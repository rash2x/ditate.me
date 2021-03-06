import React, { useContext } from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import ReactLoading from 'react-loading';

import Helmet from 'react-helmet';
import { AirtableContext } from '../../airtable/context';
import Teacher from './Teacher';
import { getTeacherById } from '../../airtable/services';
import HomeToolbar from '../../components/HomeToolbar';
import NavigationBar from '../../components/NavigationBar';

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
  padding-bottom: ${props => props.theme.mixins.toolbar.minHeight + 24}px;
`;

const Group = styled.div`
  margin-top: 16px;

  & + & {
    margin-top: 32px;
  }
`;

const GroupList = styled.div`
  display: flex;
  margin-top: 16px;
  overflow-x: auto;

  > * + * {
    margin-left: 16px;
  }
`;

const GroupTitle = styled(Typography).attrs({
  variant: 'h2',
})`
  color: ${props => props.color};
`;

const LoadingBar = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;
`;

const Teachers = () => {
  const [state] = useContext(AirtableContext);
  const isLoading = !(state.practices && state.teachers);

  if (!state.practices && !state.teachers) {
    return (
      <LoadingBar>
        <ReactLoading type="bubbles" color="#fff" />
      </LoadingBar>
    );
  }

  return (
    !isLoading && (
      <>
        <HomeToolbar />
        <Base>
          {state.practices &&
            state.practices.map(practice => (
              <Group key={practice.id}>
                <GroupTitle color="inherit" style={{ color: practice.color }}>
                  {practice.name}
                </GroupTitle>
                <GroupList>
                  {practice.hasTeachers &&
                    practice.teacherIds.map(teacherId => {
                      const teacher = getTeacherById(teacherId, state.teachers);

                      return (
                        teacher && (
                          <Teacher
                            key={teacherId}
                            id={teacherId}
                            name={teacher.name}
                            thumbnail={teacher.image}
                          />
                        )
                      );
                    })}
                </GroupList>
              </Group>
            ))}
        </Base>
        <NavigationBar />
        <Helmet>
          <meta name="description" content="Поиск практик и медитаций" />
          <title>Ditate.me</title>
        </Helmet>
      </>
    )
  );
};

export default Teachers;
