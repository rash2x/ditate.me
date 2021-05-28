import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Airtable from 'airtable';
import Teacher from './Teacher';

const Base = styled.div`
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

const airtableBase = new Airtable({
  apiKey: 'keyEXP4qnVysxeAWt'
}).base('appAB6mLnImrAFBWa');

const Teachers = () => {
  const [practices, setPractices] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    airtableBase('Practices')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        setPractices(records);
        fetchNextPage();
      })
  }, [])

  useEffect(() => {
    airtableBase('Teachers')
      .select({
        view: 'Grid view'
      })
      .eachPage((records, fetchNextPage) => {
        setTeachers(records);
        fetchNextPage();
      })
  }, []);

  const getTeacher = (teacherId) => {
    return teachers.find(t => t.id === teacherId);
  };


  return (
    <Base>
      {practices.map((practice) => (
        practice && (<Group key={practice.id}>
            <GroupTitle color={practice.fields.Color}>{practice.fields.Name}</GroupTitle>
            <GroupList>
              {practice.fields['Teachers'] && practice.fields['Teachers'].map((teacherId) => {
                const teacher = getTeacher(teacherId)?.fields;

                return teacher && (
                  <Teacher key={teacherId}
                           name={teacher.Instagram}
                           thumbnail={teacher['Avatar'][0].thumbnails.large.url} />
                )
              })}
            </GroupList>
          </Group>
        )
      ))}
    </Base>
  );
};

export default Teachers;
