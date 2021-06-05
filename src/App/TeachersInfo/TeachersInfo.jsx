import React, {useContext} from "react";
import {withRouter} from "react-router";

import {AirtableContext} from "../airtable/context";
import TeacherInfo from "./TeacherInfo"

const TeachersInfo = (props) => {

    const [state, dispatch] = useContext(AirtableContext)

    const teacherId = props.match.params.teacherId

    return (
        <>
            {
                state.teachers?.filter(t => t.id === teacherId).map(item => {
                    const instagram = item.fields.Instagram
                    const imageUrl = item.fields['Avatar'][0].thumbnails.large.url
                    const name = item.fields["Name"]
                    return (
                        <TeacherInfo
                            key={item.id}
                            imageUrl={imageUrl}
                            instagram={instagram}
                            name={name}
                        />
                    )
                })

            }

        </>
    );
};

export default withRouter(TeachersInfo)