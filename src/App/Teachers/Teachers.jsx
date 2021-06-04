import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import Airtable from 'airtable';
import Teacher from './Teacher';
import {DispatchContext, StateContext} from "../airtable/context";
import {setPractices, setTeachers} from "../airtable/reducer";

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

export const airtableBase = new Airtable({
    apiKey: 'keyEXP4qnVysxeAWt'
}).base('appAB6mLnImrAFBWa');

const Teachers = () => {

    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    useEffect(() => {
        if(state.practices === null){
            airtableBase('Practices')
                .select({
                    view: 'Grid view'
                })
                .eachPage((records, fetchNextPage) => {
                    dispatch(setPractices(records));
                    fetchNextPage();
                })
        }
    }, [state.teachers])

    useEffect(() => {
        if(state.teachers === null){
            airtableBase('Teachers')
                .select({
                    view: 'Grid view'
                })
                .eachPage((records, fetchNextPage) => {
                    dispatch(setTeachers(records))
                    fetchNextPage();
                })
        }
    }, []);

    const getTeacher = (teacherId) => {
        return state.teachers?.find(t => t.id === teacherId);
    };

    console.log(state)

    return (
        <Base>
            {state.practices && state.practices.map((practice) => (
                practice && (<Group key={practice.id}>
                        <GroupTitle color={practice.fields.Color}>{practice.fields.Name}</GroupTitle>
                        <GroupList>
                            {practice.fields['Teachers'] && practice.fields['Teachers'].map(teacherId => {
                                const teacher = getTeacher(teacherId)?.fields;

                                return teacher && (
                                    <Teacher key={teacherId}
                                             id={teacherId}
                                             name={teacher.Instagram}
                                             thumbnail={teacher['Avatar'][0].thumbnails.large.url}/>
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
