import React, { useContext } from 'react';

import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';
import ReactLoading from 'react-loading';

import { AirtableContext } from '../airtable/context';
import Teacher from './Teacher';

import defaultAva from "../../assets/avadefault.jpg"

const Base = styled(Container)`
  padding-top: ${props => props.theme.mixins.toolbar.minHeight}px;
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
  variant: 'h2'
})`
  color: ${props => props.color};
`;

const LoadingBar = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;
`;

const Teachers = () => {
  const getTeacher = (teacherId) => {
    return state.teachers?.find(t => t.id === teacherId);
  };

  const [state,] = useContext(AirtableContext);

  if (!state.practices && !state.teachers) {
    return <LoadingBar>
      <ReactLoading type={'bubbles'} color="#fff" />
    </LoadingBar>;
  }

  return (
    <Base>
      {state.practices && state.practices.map((practice) => (
        practice && (<Group key={practice.id}>
            <GroupTitle color="inherit"
                        style={{ color: practice.fields.Color }}>{practice.fields.Name}</GroupTitle>
            <GroupList>
              {practice.fields['Teachers'] && practice.fields['Teachers'].map(teacherId => {
                const teacher = getTeacher(teacherId)?.fields
                return teacher && (
                  <Teacher key={teacherId}
                           id={teacherId}
                           name={teacher.Name}
                           thumbnail={teacher['Avatar'] ? teacher['Avatar'][0].thumbnails.large.url : defaultAva}
                  />
                );
              })}
            </GroupList>
          </Group>
        )
      ))}
    </Base>
  );
};

export default Teachers;
