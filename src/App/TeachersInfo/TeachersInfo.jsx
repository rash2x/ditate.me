import React, {useContext} from "react";
import {withRouter} from "react-router";

import {AirtableContext} from "../airtable/context";
import TeacherInfo from "./TeacherInfo"

const TeachersInfo = (props) => {

    const [state, dispatch] = useContext(AirtableContext)

    const teacherId = props.match.params.teacherId

    const findTeacherId = () => {
        return state.teachers.find(t => t.id === teacherId);
    }

    return (
        <>
            {state.teachers && state.teachers.map(item => {
                const items = findTeacherId()
                const imageUrl = items.fields['Avatar'][0].thumbnails.large.url
                const instagram = items.fields.Instagram
                const name = items.fields.Name
                return (
                    <TeacherInfo
                        key={item.id}
                        imageUrl={imageUrl}
                        instagram={instagram}
                        name={name}
                    />
                )
            })}
        </>
    );
};

export default withRouter(TeachersInfo)